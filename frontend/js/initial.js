// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   document.documentElement.dataset.theme = savedTheme;
// }

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

function applyInitialTheme() {
  const savedTheme = getCookie("theme");
  const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", preferredTheme);
}

applyInitialTheme();