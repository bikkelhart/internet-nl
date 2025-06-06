// const toggleTheme = document.getElementById('theme-toggle');

// function setTheme(theme) {
//   document.documentElement.setAttribute('data-theme', theme);
//   localStorage.setItem('theme', theme);
// }

// function getPreferredTheme() {
//   return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
// }

// const currentTheme = getPreferredTheme();
// document.documentElement.setAttribute('data-theme', currentTheme);

// toggleTheme.addEventListener('click', () => {
//   const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
//   setTheme(newTheme);
// });


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = ";expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value || ""}${expires};path=/;domain=.example.com`;
}

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

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  setCookie("theme", theme, 365);
}

const toggleThemeBtn = document.getElementById("theme-toggle");
if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    setTheme(newTheme);
  });
}