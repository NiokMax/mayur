/**
 * Mayur Bikash Gogoi Portfolio - Theme Management
 * Light / Dark Mode with localStorage and System Preference
 */

(function () {
  const THEME_KEY = "mbg_theme_preference";

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
      btn.setAttribute("title", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
    });
  }

  // Initialize theme immediately to prevent FOUC
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Set up listeners once DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(THEME_KEY, newTheme);
        } catch (e) {
          // LocalStorage unavailable
        }
        applyTheme(newTheme);
      });
    });

    // Listen to system preference changes if no manual preference saved
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  });
})();
