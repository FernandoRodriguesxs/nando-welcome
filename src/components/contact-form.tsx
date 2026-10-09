"use client";

import { type FormEvent, useState } from "react";
import { links } from "@/lib/site";
import { Icon } from "./icon";

const scopes = [
  { value: "fullstack", label: "Full Stack", icon: "code" },
  { value: "ai", label: "Inteligência Artificial", icon: "smart_toy" },
  { value: "mobile", label: "Mobile", icon: "phone_iphone" },
  { value: "opportunity", label: "Oportunidade", icon: "work" },
];

const field =
  "relative rounded bg-surface-container-lowest/90 dark:bg-white/[0.06] backdrop-blur-md shadow-[0_2px_8px_rgba(43,56,42,0.03)] dark:border dark:border-white/10 focus-within:ring-2 focus-within:ring-primary/40 dark:focus-within:ring-emerald-400/40 transition-all";
const input =
  "w-full bg-transparent px-space-md py-3 font-body-md text-body-md text-on-surface dark:text-white placeholder:text-outline/70 dark:placeholder:text-neutral-500 focus:outline-none";
const label = "block font-label-md text-label-md text-on-surface dark:text-neutral-200 font-medium";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend yet: the message opens pre-filled in the visitor's e-mail client.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const scope = scopes.find((item) => item.value === data.get("project_scope"))?.label ?? "Contato";
    const subject = `[Portfólio] ${scope} — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n—\n${data.get("name")}\n${data.get("email")}`;

    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
    setSent(true);
  }

  return (
    <form className="space-y-space-md" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between gap-space-sm pb-2">
        <div>
          <h3 className="font-title-md text-title-md text-on-surface dark:text-white font-semibold">Envie sua mensagem</h3>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 text-sm">
            Preencha os campos abaixo para iniciarmos uma conversa focada e produtiva.
          </p>
        </div>
        <Icon className="text-secondary/60 dark:text-emerald-400/60 text-2xl" name="mail" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="space-y-1.5">
          <label className={label} htmlFor="name">
            Nome Completo
          </label>
          <div className={field}>
            <input autoComplete="name" className={input} id="name" name="name" placeholder="Seu nome" required type="text" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className={label} htmlFor="email">
            E-mail
          </label>
          <div className={field}>
            <input
              autoComplete="email"
              className={input}
              id="email"
              name="email"
              placeholder="seu.email@exemplo.com"
              required
              type="email"
            />
          </div>
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className={`${label} mb-2`}>Assunto / Escopo</legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {scopes.map((scope, index) => (
            <label className="cursor-pointer" key={scope.value}>
              <input
                className="peer sr-only"
                defaultChecked={index === 0}
                name="project_scope"
                type="radio"
                value={scope.value}
              />
              <div className="h-full p-3 rounded text-center font-label-md text-label-md font-medium text-on-surface-variant dark:text-neutral-400 bg-surface-container-lowest/80 dark:bg-white/[0.06] dark:border dark:border-white/10 peer-checked:bg-primary-container dark:peer-checked:bg-emerald-600 peer-checked:text-on-primary-container dark:peer-checked:text-white peer-checked:shadow-sm peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 hover:bg-surface-container-high/60 dark:hover:bg-white/10 transition-all duration-200 flex flex-col items-center gap-1">
                <Icon className="text-[20px]" name={scope.icon} />
                <span>{scope.label}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label className={label} htmlFor="message">
          Mensagem
        </label>
        <div className={field}>
          <textarea
            className={`${input} resize-none`}
            id="message"
            name="message"
            placeholder="Compartilhe os detalhes da sua proposta, oportunidade ou desafio técnico..."
            required
            rows={4}
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-2 text-on-surface-variant dark:text-neutral-400 font-label-sm text-label-sm">
          <Icon className="text-[16px] text-primary dark:text-emerald-400" name="verified_user" />
          <span>Mensagem enviada diretamente para a caixa pessoal.</span>
        </div>
        <button
          className="relative group overflow-hidden px-space-xl py-3.5 rounded-full bg-primary dark:bg-emerald-600 text-on-primary font-label-md text-label-md font-semibold shadow-[0_12px_24px_-6px_rgba(66,86,65,0.35)] hover:shadow-[0_16px_32px_-6px_rgba(66,86,65,0.45)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          type="submit"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>Enviar Mensagem</span>
            <Icon className="text-[18px] group-hover:translate-x-1 transition-transform" name="send" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
        </button>
      </div>

      {sent && (
        <div
          className="flex p-space-md rounded bg-primary-container dark:bg-emerald-900/60 text-on-primary-container dark:text-emerald-100 font-body-md text-body-md items-center justify-between gap-space-sm shadow-md"
          role="status"
        >
          <div className="flex items-center gap-space-sm">
            <Icon className="dark:text-emerald-300" name="check_circle" />
            <span>Abrimos seu app de e-mail com a mensagem pronta. É só enviar e eu retorno o mais breve possível.</span>
          </div>
          <button
            aria-label="Fechar aviso"
            className="text-on-primary-container/80 hover:text-on-primary-container dark:text-emerald-100/80"
            onClick={() => setSent(false)}
            type="button"
          >
            <Icon className="text-[18px]" name="close" />
          </button>
        </div>
      )}
    </form>
  );
}
