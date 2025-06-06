/**
 * Initialize theme
 */
function initialize() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }
}

export default initialize;
