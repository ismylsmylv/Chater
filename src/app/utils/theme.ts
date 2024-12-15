export function setTheme(themeName: string) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

export function keepTheme() {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTheme("theme-light");
    }
  } else {
    setTheme("theme-dark");
  }
}
export function checkTheme() {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "theme-dark") {
      return true;
    } else {
      return false;
    }
  }
}
