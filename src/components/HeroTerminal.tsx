import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Line {
  kind: "cmd" | "ok" | "dim";
  text: string;
}

const SCRIPT: Line[] = [
  { kind: "cmd", text: "npm run typecheck" },
  { kind: "ok", text: "✓ no errors" },
  { kind: "cmd", text: "npm run test" },
  { kind: "dim", text: "vitest  run" },
  { kind: "ok", text: "✓ 47 files  312 tests  passed" },
  { kind: "cmd", text: "npm run build" },
  { kind: "ok", text: "✓ built in 0.41s" },
  { kind: "cmd", text: "git push" },
  { kind: "dim", text: "main -> main" },
];

export function HeroTerminal() {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced ? SCRIPT.length : 0);
  const ref = useRef<HTMLDivElement | null>(null);
  const seen = useRef(false);

  useEffect(() => {
    if (reduced) {
      setVisible(SCRIPT.length);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(SCRIPT.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !seen.current) {
          seen.current = true;
          io.disconnect();
          let i = 0;
          const step = () => {
            i += 1;
            setVisible(i);
            if (i < SCRIPT.length) {
              const line = SCRIPT[i];
              window.setTimeout(step, line.kind === "cmd" ? 620 : 360);
            }
          };
          window.setTimeout(step, 350);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div className="term" ref={ref} role="img" aria-label="A terminal running typecheck, tests, and a build">
      <div className="term__bar" aria-hidden="true">
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__dot" />
        <span className="term__title mono">~/portfolio</span>
      </div>
      <div className="term__body" aria-hidden="true">
        {SCRIPT.slice(0, visible).map((line, i) => (
          <div key={i} className={`term__line term__line--${line.kind}`}>
            {line.kind === "cmd" && <span className="term__prompt">$</span>}
            <span className="term__text">{line.text}</span>
          </div>
        ))}
        {visible < SCRIPT.length && !reduced && (
          <div className="term__line">
            <span className="term__prompt">$</span>
            <span className="term__caret" />
          </div>
        )}
      </div>
    </div>
  );
}
