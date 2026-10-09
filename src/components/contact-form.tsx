"use client";

import { useActionState, useState } from "react";
import { type ContactField, type ContactState, sendContactMessage } from "@/app/contato/actions";
import { Icon } from "./icon";

const field =
  "relative rounded bg-surface-container-lowest/90 dark:bg-white/[0.06] backdrop-blur-md shadow-[0_2px_8px_rgba(43,56,42,0.03)] dark:border dark:border-white/10 focus-within:ring-2 focus-within:ring-primary/40 dark:focus-within:ring-emerald-400/40 transition-all";
const fieldInvalid = "ring-2 ring-error/50 dark:ring-red-400/50";
const input =
  "w-full bg-transparent px-space-md py-3 font-body-md text-body-md text-on-surface dark:text-white placeholder:text-outline/70 dark:placeholder:text-neutral-500 focus:outline-none";
const label = "block font-label-md text-label-md text-on-surface dark:text-neutral-200 font-medium";

const initialState: ContactState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p className="text-[12px] font-medium text-error dark:text-red-400 animate-message-in" id={id}>
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  // The notice belongs to one submission; closing it hides that result only.
  const [dismissed, setDismissed] = useState<ContactState | null>(null);

  const showNotice = state.status !== "idle" && dismissed !== state && !pending;
  const errorOf = (name: ContactField) => state.errors?.[name];
  const fieldProps = (name: ContactField) => ({
    "aria-describedby": errorOf(name) ? `${name}-error` : undefined,
    "aria-invalid": errorOf(name) ? true : undefined,
    defaultValue: state.values?.[name],
    id: name,
    name,
  });

  return (
    <form action={formAction} className="space-y-space-md" noValidate>
      <div className="flex items-center justify-between gap-space-sm pb-2">
        <div>
          <h3 className="font-title-md text-title-md text-on-surface dark:text-white font-semibold">Envie sua mensagem</h3>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 text-sm">
            Preencha os campos abaixo para iniciarmos uma conversa focada e produtiva.
          </p>
        </div>
        <Icon className="text-secondary/60 dark:text-emerald-400/60 text-2xl" name="mail" />
      </div>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="space-y-1.5">
          <label className={label} htmlFor="name">
            Nome Completo
          </label>
          <div className={`${field} ${errorOf("name") ? fieldInvalid : ""}`}>
            <input autoComplete="name" className={input} placeholder="Seu nome" required type="text" {...fieldProps("name")} />
          </div>
          <FieldError id="name-error" message={errorOf("name")} />
        </div>
        <div className="space-y-1.5">
          <label className={label} htmlFor="email">
            E-mail
          </label>
          <div className={`${field} ${errorOf("email") ? fieldInvalid : ""}`}>
            <input
              autoComplete="email"
              className={input}
              placeholder="seu.email@exemplo.com"
              required
              type="email"
              {...fieldProps("email")}
            />
          </div>
          <FieldError id="email-error" message={errorOf("email")} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={label} htmlFor="message">
          Mensagem
        </label>
        <div className={`${field} ${errorOf("message") ? fieldInvalid : ""}`}>
          <textarea
            className={`${input} resize-none`}
            maxLength={5000}
            placeholder="Compartilhe os detalhes da sua proposta, oportunidade ou desafio técnico..."
            required
            rows={4}
            {...fieldProps("message")}
          />
        </div>
        <FieldError id="message-error" message={errorOf("message")} />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-2 text-on-surface-variant dark:text-neutral-400 font-label-sm text-label-sm">
          <Icon className="text-[16px] text-primary dark:text-emerald-400" name="verified_user" />
          <span>Mensagem enviada diretamente para a caixa pessoal.</span>
        </div>
        <button
          aria-disabled={pending}
          className="group btn btn-primary px-space-xl py-3.5 w-full sm:w-auto disabled:opacity-70 disabled:hover:translate-y-0"
          disabled={pending}
          type="submit"
        >
          <span>{pending ? "Enviando…" : "Enviar Mensagem"}</span>
          <Icon
            className={`text-[18px] ${pending ? "animate-spin" : "btn-arrow"}`}
            name={pending ? "progress_activity" : "send"}
          />
        </button>
      </div>

      {showNotice && state.message && (
        <div
          className={`flex animate-message-in p-space-md rounded font-body-md text-body-md items-center justify-between gap-space-sm shadow-md ${
            state.status === "success"
              ? "bg-primary-container dark:bg-emerald-900/60 text-on-primary-container dark:text-emerald-100"
              : "bg-error-container dark:bg-red-950/60 text-on-error-container dark:text-red-200"
          }`}
          role={state.status === "success" ? "status" : "alert"}
        >
          <div className="flex items-center gap-space-sm">
            <Icon className="text-[20px]" name={state.status === "success" ? "check_circle" : "error"} />
            <span>{state.message}</span>
          </div>
          <button
            aria-label="Fechar aviso"
            className="opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => setDismissed(state)}
            type="button"
          >
            <Icon className="text-[18px]" name="close" />
          </button>
        </div>
      )}
    </form>
  );
}
