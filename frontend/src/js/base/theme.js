import { validateElements } from "../lib/utils.js";

const elements = {
  toggleTheme: document.getElementById("theme-toggle"),
};

function getCookie(name) {
  const nameEQ = name + "=";
  const parts = document.cookie.split(";");
  for (let part of parts) {
    part = part.trim();
    if (part.indexOf(nameEQ) === 0) {
      return part.substring(nameEQ.length);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = ";expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${
    value || ""
  }${expires};path=/;domain=.example.com`;
}

function getPreferredTheme() {
  return (
    getCookie("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  setCookie("theme", theme, 365);
}

function themeSwitch() {
  document.documentElement.setAttribute("data-theme", getPreferredTheme());

  elements.toggleTheme.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    setTheme(newTheme);
  });
}

if (validateElements(elements, "theme")) {
  themeSwitch();
}

export default themeSwitch;
