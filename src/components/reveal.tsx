"use client";

import { type ElementType, type HTMLAttributes, useEffect, useRef, useState } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "section" | "aside" | "ul";
};

// Fades its content up the first time it scrolls into view (styles in globals.css).
// React owns the "is-visible" class, so hydration never sees a mutated DOM.
export function Reveal({ as = "div", className = "", ...props }: RevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Tag className={`${className}${visible ? " is-visible" : ""}`} data-reveal="" ref={ref} {...props} />;
}
