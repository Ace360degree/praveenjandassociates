import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  /** Tailwind delay class e.g. "delay-100" */
  delay?: string;
  /** Direction to slide in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
};

const directionMap = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

/**
 * Wraps children in a fade-in-on-scroll container.
 * Uses IntersectionObserver — no external dependencies needed.
 */
export function FadeIn({ children, delay = "", direction = "up", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = directionMap[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
