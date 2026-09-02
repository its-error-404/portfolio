import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "./Icons";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className={`theme-toggle${compact ? " theme-toggle--compact" : ""}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <span className="theme-toggle__icon" data-visible={theme === "dark"}>
        <Moon />
      </span>
      <span className="theme-toggle__icon" data-visible={theme === "light"}>
        <Sun />
      </span>
    </button>
  );
}
