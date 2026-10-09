"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  type ChatTopic,
  chatFallback,
  chatGreeting,
  chatTopics,
  initialTopicIds,
  matchTopic,
} from "@/content/chat";
import { Icon } from "./icon";

type Message = {
  id: number;
  from: "bot" | "user";
  paragraphs: string[];
  tags?: string[];
  action?: ChatTopic["action"];
};

const topicById = new Map(chatTopics.map((topic) => [topic.id, topic]));
const MAX_SUGGESTIONS = 4;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Reveals the bot reply a few characters at a time, like it is being typed.
function TypedParagraphs({ paragraphs, onProgress, onDone }: {
  paragraphs: string[];
  onProgress: () => void;
  onDone: () => void;
}) {
  const fullText = paragraphs.join("\n");
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? fullText.length : 0));

  useEffect(() => {
    if (shown === fullText.length) return;
    const interval = setInterval(() => {
      setShown((current) => {
        const next = Math.min(current + 3, fullText.length);
        if (next === fullText.length) clearInterval(interval);
        return next;
      });
    }, 18);
    return () => clearInterval(interval);
    // Typing runs once per message.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onProgress();
    if (shown === fullText.length && shown > 0) onDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]);

  return (
    <>
      {fullText
        .slice(0, shown)
        .split("\n")
        .map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
    </>
  );
}

function BotBubble({ message, typed, onProgress, onTyped }: {
  message: Message;
  typed: boolean;
  onProgress: () => void;
  onTyped: () => void;
}) {
  return (
    <div className="flex items-end gap-2 animate-message-in">
      <Image
        alt=""
        className="w-6 h-6 rounded-full object-cover object-top shrink-0 ring-1 ring-white/60 dark:ring-white/10"
        height={48}
        src="/images/avatar.png"
        width={48}
      />
      <div className="max-w-[85%] space-y-2">
        <div className="rounded-2xl rounded-bl-md bg-surface-container-lowest/90 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.08] px-3.5 py-2.5 text-[14px] leading-[22px] text-on-surface dark:text-neutral-200 shadow-[0_2px_10px_-6px_rgba(43,56,42,0.2)] space-y-1.5">
          {typed ? (
            message.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <TypedParagraphs onDone={onTyped} onProgress={onProgress} paragraphs={message.paragraphs} />
          )}
        </div>
        {typed && (message.tags || message.action) && (
          <div className="flex flex-wrap items-center gap-1.5 animate-message-in">
            {message.tags?.map((tag) => (
              <span className="tag tag-accent" key={tag}>
                {tag}
              </span>
            ))}
            {message.action && (
              <Link
                className="group inline-flex items-center gap-1 text-[12px] font-semibold text-primary dark:text-emerald-400 hover:underline underline-offset-4"
                href={message.action.href}
              >
                {message.action.label}
                <Icon className="text-[14px] btn-arrow" name="arrow_forward" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingIds, setTypingIds] = useState<Set<number>>(new Set());
  const [thinking, setThinking] = useState(false);
  const [asked, setAsked] = useState<string[]>([]);
  const [suggestionIds, setSuggestionIds] = useState<string[]>(initialTopicIds);
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false);

  const nextId = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const busy = thinking || typingIds.size > 0;

  function scrollToBottom(smooth = true) {
    const element = scrollRef.current;
    if (element) element.scrollTo({ top: element.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }

  function pushMessage(message: Omit<Message, "id">, animateTyping: boolean) {
    const id = nextId.current++;
    setMessages((current) => [...current, { ...message, id }]);
    if (animateTyping) setTypingIds((current) => new Set(current).add(id));
  }

  function finishTyping(id: number) {
    setTypingIds((current) => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  }

  function reply(topic: ChatTopic | undefined, alreadyAsked: string[]) {
    setThinking(true);
    // Longer answers "think" a little longer, like a person would.
    const answerLength = (topic?.answer ?? chatFallback.answer).join(" ").length;
    const delay = prefersReducedMotion() ? 0 : 600 + Math.min(answerLength * 1.5, 500);
    timers.current.push(
      setTimeout(() => {
        setThinking(false);
        if (topic) {
          pushMessage({ from: "bot", paragraphs: topic.answer, tags: topic.tags, action: topic.action }, true);
        } else {
          pushMessage({ from: "bot", paragraphs: chatFallback.answer, action: chatFallback.action }, true);
        }

        const preferred = topic ? topic.next : initialTopicIds;
        const pool = [...preferred, ...initialTopicIds, ...chatTopics.map((item) => item.id)];
        const fresh = [...new Set(pool)].filter((id) => !alreadyAsked.includes(id));
        setSuggestionIds(fresh.slice(0, MAX_SUGGESTIONS));
      }, delay),
    );
  }

  function ask(topic: ChatTopic | undefined, text: string) {
    if (busy) return;
    const alreadyAsked = topic ? [...asked, topic.id] : asked;
    setAsked(alreadyAsked);
    setSuggestionIds([]);
    pushMessage({ from: "user", paragraphs: [text] }, false);
    reply(topic, alreadyAsked);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;
    setInput("");
    ask(matchTopic(question), question);
  }

  function toggle() {
    setOpen((current) => !current);
    setShowHint(false);
    try {
      sessionStorage.setItem("chat-hint-seen", "1");
    } catch {}
  }

  // Greets on first open.
  useEffect(() => {
    if (open && messages.length === 0) pushMessage({ from: "bot", paragraphs: chatGreeting }, true);
    if (open) {
      const focus = setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 320);
      return () => clearTimeout(focus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking, suggestionIds, typingIds]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // A small one-time hint next to the bubble, once per session.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("chat-hint-seen") === "1";
    } catch {}
    if (seen) return;
    const show = setTimeout(() => setShowHint(true), 2500);
    const hide = setTimeout(() => setShowHint(false), 9500);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed right-4 md:right-6 bottom-24 md:bottom-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      {open && (
        <section
          aria-label="Chat com o assistente do Fernando"
          className="pointer-events-auto origin-bottom-right animate-panel-in w-[min(380px,calc(100vw_-_2rem))] h-[min(560px,calc(100dvh_-_16rem))] md:h-[min(580px,calc(100dvh_-_12rem))] flex flex-col rounded-[28px] overflow-hidden bg-surface-container-low/85 dark:bg-[#121715]/90 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_24px_60px_-20px_rgba(43,56,42,0.35)] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]"
          role="dialog"
        >
          {/* Header */}
          <header className="flex items-center gap-3 px-4 py-3 border-b border-on-surface/[0.06] dark:border-white/[0.06] bg-surface-container-lowest/60 dark:bg-white/[0.02]">
            <div className="relative shrink-0">
              <Image
                alt=""
                className="w-9 h-9 rounded-full object-cover object-top ring-1 ring-white/70 dark:ring-white/10"
                height={72}
                src="/images/avatar.png"
                width={72}
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest dark:ring-[#121715]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold leading-5 text-on-surface dark:text-white">Assistente do Fernando</p>
              <p className="text-[12px] leading-4 text-on-surface-variant dark:text-neutral-400">
                {thinking ? "digitando…" : "Online · respostas rápidas"}
              </p>
            </div>
            <button
              aria-label="Fechar chat"
              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white hover:bg-on-surface/[0.06] dark:hover:bg-white/[0.08] transition-colors"
              onClick={() => setOpen(false)}
              type="button"
            >
              <Icon className="text-[20px]" name="close" />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3" ref={scrollRef}>
            {messages.map((message) =>
              message.from === "bot" ? (
                <BotBubble
                  key={message.id}
                  message={message}
                  onProgress={() => scrollToBottom(false)}
                  onTyped={() => finishTyping(message.id)}
                  typed={!typingIds.has(message.id)}
                />
              ) : (
                <div className="flex justify-end animate-message-in" key={message.id}>
                  <p className="max-w-[80%] rounded-2xl rounded-br-md bg-primary dark:bg-emerald-600 text-on-primary px-3.5 py-2 text-[14px] leading-[22px] shadow-[0_4px_12px_-6px_rgba(66,86,65,0.5)]">
                    {message.paragraphs[0]}
                  </p>
                </div>
              ),
            )}

            {thinking && (
              <div className="flex items-end gap-2 animate-message-in" aria-live="polite">
                <span className="sr-only">Assistente digitando</span>
                <div className="w-6 h-6 shrink-0" />
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-surface-container-lowest/90 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.08] px-3.5 py-3">
                  {[0, 150, 300].map((delay) => (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-on-surface-variant dark:bg-neutral-400 animate-typing-dot"
                      key={delay}
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {!busy && suggestionIds.length > 0 && (
              <div className="pt-1 pl-8 flex flex-wrap gap-1.5 animate-message-in">
                {suggestionIds.map((id) => {
                  const topic = topicById.get(id);
                  if (!topic) return null;
                  return (
                    <button
                      className="group inline-flex items-center gap-1.5 rounded-full border border-primary/15 dark:border-emerald-400/20 bg-surface-container-lowest/70 dark:bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium leading-4 text-primary dark:text-emerald-300 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-px hover:bg-surface-container-lowest hover:border-primary/30 dark:hover:bg-emerald-400/10 dark:hover:border-emerald-400/30"
                      key={id}
                      onClick={() => ask(topic, topic.label)}
                      type="button"
                    >
                      <Icon className="text-[14px] opacity-70" name={topic.icon} />
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            className="flex items-center gap-2 px-3 py-3 border-t border-on-surface/[0.06] dark:border-white/[0.06] bg-surface-container-lowest/60 dark:bg-white/[0.02]"
            onSubmit={handleSubmit}
          >
            <label className="sr-only" htmlFor="chat-input">
              Sua pergunta
            </label>
            <input
              autoComplete="off"
              className="flex-1 min-w-0 rounded-full bg-surface-container-lowest dark:bg-white/[0.06] border border-on-surface/[0.06] dark:border-white/[0.08] px-4 py-2.5 text-[14px] text-on-surface dark:text-white placeholder:text-outline/80 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/25 dark:focus:ring-emerald-400/25 transition-shadow"
              id="chat-input"
              maxLength={200}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Pergunte algo sobre o Fernando…"
              ref={inputRef}
              value={input}
            />
            <button
              aria-label="Enviar pergunta"
              className="btn btn-primary w-10 h-10 shrink-0 disabled:opacity-40 disabled:hover:translate-y-0 disabled:shadow-none"
              disabled={!input.trim() || busy}
              type="submit"
            >
              <Icon className="text-[18px]" name="arrow_upward" />
            </button>
          </form>
        </section>
      )}

      <div className="flex items-center gap-3">
        {showHint && !open && (
          <button
            className="pointer-events-auto animate-message-in hidden sm:inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/90 dark:bg-[#161B19]/90 backdrop-blur-xl border border-white/60 dark:border-white/10 px-3.5 py-2 text-[13px] font-medium text-on-surface dark:text-neutral-200 shadow-[0_8px_24px_-12px_rgba(43,56,42,0.35)]"
            onClick={toggle}
            type="button"
          >
            Pergunte sobre o Fernando
            <Icon className="text-[16px] text-primary dark:text-emerald-400" name="waving_hand" />
          </button>
        )}
        <button
          aria-expanded={open}
          aria-label={open ? "Fechar chat" : "Abrir chat com o assistente"}
          className="pointer-events-auto group relative w-14 h-14 rounded-full flex items-center justify-center bg-surface-container-lowest/80 dark:bg-[#161B19]/85 backdrop-blur-2xl border border-white/70 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(43,56,42,0.4)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_rgba(43,56,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          onClick={toggle}
          type="button"
        >
          <span
            className={`absolute inset-1 rounded-full overflow-hidden transition-[opacity,transform] duration-300 ${
              open ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <Image alt="" className="w-full h-full object-cover object-top" height={96} src="/images/avatar.png" width={96} />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center text-on-surface dark:text-white transition-[opacity,transform] duration-300 ${
              open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          >
            <Icon className="text-[24px]" name="close" />
          </span>
          {!open && (
            <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest dark:ring-[#161B19]" />
          )}
        </button>
      </div>
    </div>
  );
}
