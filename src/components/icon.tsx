import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export function Icon({ name, className = "", filled = false }: IconProps) {
  const style: CSSProperties | undefined = filled
    ? { fontVariationSettings: "'FILL' 1" }
    : undefined;

  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}
