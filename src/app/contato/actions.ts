"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { links } from "@/lib/site";

export type ContactField = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

// Best-effort per-IP limit. It lives in server memory, so it resets on deploys and
// is per instance; enough to stop casual form spam on a portfolio.
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentSubmissions.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recentSubmissions.set(ip, [...recent, now]);
  return recent.length >= RATE_LIMIT.max;
}

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

function validate(values: Record<ContactField, string>) {
  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Informe seu nome.";
  else if (values.name.length > 100) errors.name = "Use até 100 caracteres.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Informe um e-mail válido.";
  if (values.message.length < 10) errors.message = "Escreva pelo menos 10 caracteres.";
  else if (values.message.length > 5000) errors.message = "Use até 5000 caracteres.";
  return errors;
}

export async function sendContactMessage(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (String(formData.get("website") ?? "") !== "") return { status: "success" };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Revise os campos destacados.", errors, values };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: "Muitas mensagens em pouco tempo. Tente de novo em alguns minutos.", values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; message not sent.");
    return {
      status: "error",
      message: `O envio está indisponível agora. Escreva direto para ${links.email}.`,
      values,
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Portfólio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || links.email,
    replyTo: values.email,
    subject: `Novo contato pelo portfólio: ${values.name}`,
    text: `${values.message}\n\n—\n${values.name}\n${values.email}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;font-size:15px;line-height:1.6;color:#1f1b16">
        <p style="margin:0 0 16px;color:#4d473e">Nova mensagem pelo formulário do portfólio.</p>
        <p style="margin:0"><strong>Nome:</strong> ${escapeHtml(values.name)}</p>
        <p style="margin:0 0 16px"><strong>E-mail:</strong> ${escapeHtml(values.email)}</p>
        <div style="padding:16px;border-radius:12px;background:#f4eee4;white-space:pre-wrap">${escapeHtml(values.message)}</div>
        <p style="margin:16px 0 0;color:#7b7468;font-size:13px">Responda este e-mail para falar direto com ${escapeHtml(values.name)}.</p>
      </div>`,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return {
      status: "error",
      message: `Não consegui enviar agora. Tente de novo ou escreva para ${links.email}.`,
      values,
    };
  }

  return { status: "success", message: "Mensagem enviada! Vou te responder o mais breve possível." };
}
