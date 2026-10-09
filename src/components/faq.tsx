"use client";

import { useState } from "react";
import { Icon } from "./icon";

const questions = [
  {
    question: "Quais são as principais tecnologias que você utiliza?",
    answer: "TypeScript, React, Next.js, Node.js, NestJS e SDKs de IA (OpenAI, Anthropic).",
  },
  {
    question: "Você desenvolve soluções com Inteligência Artificial?",
    answer: "Sim, integração de LLMs, agentes autônomos, streaming de respostas e fluxos de automação inteligente.",
  },
  {
    question: "Qual o seu modelo de atuação?",
    answer: "Atuação em São Paulo (presencial, híbrido ou remoto global).",
    wide: true,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {questions.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            className={`rounded-lg bg-surface-container-lowest/70 dark:bg-[#141917]/75 backdrop-blur-xl shadow-sm dark:border dark:border-white/10 transition-shadow duration-500 hover:shadow-md overflow-hidden ${
              item.wide ? "md:col-span-2" : ""
            }`}
            key={item.question}
          >
            <button
              aria-expanded={isOpen}
              className="w-full text-left p-space-md flex items-center justify-between gap-4 focus:outline-none"
              onClick={() => setOpen(isOpen ? null : index)}
              type="button"
            >
              <span className="font-title-md text-title-md text-on-surface dark:text-white font-medium">{item.question}</span>
              <span
                className={`w-8 h-8 shrink-0 rounded-full bg-surface-container-high/60 dark:bg-white/[0.08] flex items-center justify-center text-primary dark:text-emerald-400 transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <Icon className="text-[20px]" name="expand_more" />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 px-space-md text-on-surface-variant dark:text-neutral-400 font-body-md text-body-md ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-space-md pt-1 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
