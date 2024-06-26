const darkModeToggle = document.querySelector(".dark-mode-toggle");
const currentTheme = localStorage.getItem("theme");

// If no current theme set in browser storage, set it based on
// preferred theme
if (localStorage.getItem("theme") === null) {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
  }
}

if (currentTheme == "dark") {
  document.body.classList.add("dark");
}
 
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});
