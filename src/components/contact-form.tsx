"use client";

import { type FormEvent, useState } from "react";
import { links } from "@/lib/site";
import { Icon } from "./icon";

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
    const subject = `[Portfólio] Contato — ${data.get("name")}`;
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
        <button className="group btn btn-primary px-space-xl py-3.5 w-full sm:w-auto" type="submit">
          <span>Enviar Mensagem</span>
          <Icon className="text-[18px] btn-arrow" name="send" />
        </button>
      </div>

      {sent && (
        <div
          className="flex animate-message-in p-space-md rounded bg-primary-container dark:bg-emerald-900/60 text-on-primary-container dark:text-emerald-100 font-body-md text-body-md items-center justify-between gap-space-sm shadow-md"
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
