const themes = {
  dark: {
    background: "#1d1d1d",
    text: "#f8f8f8",
    success: "#29ff29",
    error: "#ff1b33",
    code: "#0bb0fe",
    prompt: "#0ef36a",
    secondary: "#29ff29",
    githubStats: "#151414",
    link: "#4ad0fd",
    linkHover: "#29ff29",
    inputBackground: "transparent",
    border: "#17241d",
    selection: "#1a82d1",
  },
  hacker: {
    background: "#0a0a0a",
    text: "#55ff00",
    success: "#00ff00",
    error: "#ff0000",
    code: "#ffffff",
    prompt: "#00ff00",
    secondary: "#ffff00",
    githubStats: "#0a0a0a",
    link: "#00ff00",
    linkHover: "#dcff15",
    inputBackground: "transparent",
    border: "#005000",
    selection: "#79be02",
  },
  retro: {
    background: "#2b2b2b",
    text: "#ffa94d",
    success: "#ff6619",
    error: "#ba0404",
    code: "#E9A131",
    prompt: "#ffa500",
    secondary: "#fff200",
    githubStats: "#232323",
    link: "#ff8800",
    linkHover: "#FBD0A6",
    inputBackground: "transparent",
    border: "#494949",
    selection: "#705237",
  },
  cyberpunk: {
    background: "#16082c",
    text: "#fff",
    success: "#01CDFE",
    error: "#f72626",
    code: "#00ff9f",
    prompt: "#F000FF",
    secondary: "#ff65fc",
    githubStats: "#07021f",
    link: "#00FFF0",
    linkHover: "#c641ff",
    inputBackground: "transparent",
    border: "#FB0094",
    selection: "#3d0862",
  },
  ubuntu: {
    background: "#2f001e",
    text: "#ffffff",
    success: "#29ff29",
    error: "#FF5252",
    code: "#729FCF",
    prompt: "#006dff",
    secondary: "#F9F9F9",
    githubStats: "#300a24",
    link: "#F5C211",
    linkHover: "#2874f7",
    inputBackground: "transparent",
    border: "#006dff",
    selection: "#77216F",
  },
  github: {
    background: "#0d1117",
    text: "#c9d1d9",
    success: "#3fb950",
    error: "#f85149",
    code: "#d2a8ff",
    prompt: "#ffab70",
    secondary: "#8b949e",
    githubStats: "#161b22",
    link: "#58a6ff",
    linkHover: "#1f6feb",
    inputBackground: "#21262d",
    border: "#30363d",
    selection: "#264f78",
  },
  cobalt: {
    background: "#193549",
    text: "#e1efff",
    success: "#3af100",
    error: "#ff2c6d",
    code: "#9effff",
    prompt: "#ffc600",
    secondary: "#c5e478",
    githubStats: "#191849",
    link: "#5ccfe6",
    linkHover: "#80fcff",
    inputBackground: "transparent",
    border: "#234d70",
    selection: "#0d3a58",
  },
};

let currentTheme = "dark";

function setTheme(theme) {
  if (!themes[theme]) theme = "dark";
  currentTheme = theme;

  const root = document.documentElement;
  root.style.setProperty("--background-color", themes[theme].background);
  root.style.setProperty("--text-color", themes[theme].text);
  root.style.setProperty("--success-color", themes[theme].success);
  root.style.setProperty("--error-color", themes[theme].error);
  root.style.setProperty("--code-color", themes[theme].code);
  root.style.setProperty("--prompt-color", themes[theme].prompt);
  root.style.setProperty("--secondary-color", themes[theme].secondary);
  root.style.setProperty("--github-stats-color", themes[theme].githubStats);
  root.style.setProperty("--link-color", themes[theme].link);
  root.style.setProperty("--link-hover-color", themes[theme].linkHover);
  root.style.setProperty(
    "--input-background-color",
    themes[theme].inputBackground
  );
  root.style.setProperty("--border-color", themes[theme].border);
  root.style.setProperty("--selection-color", themes[theme].selection);

  document.querySelector("#app").style.backgroundColor =
    themes[theme].background;

  updateBannerColors();
}

function updateBannerColors() {
  const bannerContainer = document.querySelector(".banner-container");
  if (!bannerContainer) return;

  const baseColor = themes[currentTheme].success;
  const secondaryColor = themes[currentTheme].secondary;

  const bannerLines = bannerContainer.querySelectorAll("p");
  bannerLines.forEach((line, index) => {
    line.style.color = index % 2 === 0 ? baseColor : secondaryColor;
  });
}

function getCurrentTheme() {
  return currentTheme;
}

function getThemeColors() {
  return themes[currentTheme];
}

function getAvailableThemes() {
  return Object.keys(themes);
}

export {
  themes,
  currentTheme,
  setTheme,
  updateBannerColors,
  getCurrentTheme,
  getThemeColors,
  getAvailableThemes,
};
