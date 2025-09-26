import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle dark mode"
      className={styles.button}
    >
      {/* ☀️ Sun */}
      <span
        className={`${styles.icon} ${
          theme === "light"
            ? styles.iconActive
            : styles.sunInactive
        }`}
      >
        ☀️
      </span>

      {/* 🌙 Moon */}
      <span
        className={`${styles.icon} ${
          theme === "dark"
            ? styles.iconActive
            : styles.moonInactive
        }`}
      >
        🌙
      </span>
    </button>
  );
}
