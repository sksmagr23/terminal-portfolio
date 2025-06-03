import { setTheme, getCurrentTheme, getThemeColors } from './theme.js';
import { processCommand, autocomplete, createText } from './commands.js';

const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const commandHistory = [];
let historyIndex = -1;
let terminalPrefix = "sksm_agr";

app.addEventListener("keydown", async function (event) {
  const input = document.querySelector("input");
  if (!input) return;

  if (event.key === "Enter") {
    event.preventDefault();
    await delay(100);
    const value = input.value.trim();
    if (value) {
      commandHistory.push(value);
      historyIndex = commandHistory.length;
    }

    const terminalLine = document.querySelector(".terminal-line");
    const inputContainer = terminalLine.querySelector(".input-container");
    inputContainer.removeChild(input);

    inputContainer.innerHTML += value;
    terminalLine.classList.remove("terminal-line");
    terminalLine.classList.add("command-history-line");

    const result = await processCommand(value, app);
    if (result && result.clearHistory) {
      commandHistory.length = 0;
      historyIndex = -1;
    }
    
    await delay(100);
    new_line();
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
    }
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      input.value = "";
    }
  } else if (event.key === "Tab") {
    event.preventDefault();
    const result = autocomplete(input.value);
    
    if (result.exactMatch) {
      input.value = result.exactMatch;
    } else if (result.multipleMatches) {
      createText(app, "Available commands:");
      for (const match of result.multipleMatches) {
        createText(app, `· ${match}`);
      }
    }
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  if (input) input.focus();
});

async function open_terminal() {
  setTheme(getCurrentTheme());
  await delay(200);
  await createAnimatedBanner();
  await delay(200);
  await typeText("Starting terminal server...");

  const loadingP = document.createElement("p");
  loadingP.innerHTML = "<span class='loading-indicator'></span>";
  app.appendChild(loadingP);
  await delay(500);
  app.removeChild(loadingP);

  await typeText(
    "<span class='success-text'>Server online.</span> Type 'help' to see list of available commands."
  );
  await delay(300);
  new_line();
}

async function typeText(text) {
  const p = document.createElement("p");
  app.appendChild(p);

  return new Promise((resolve) => {
    let i = 0;
    const speed = 80;

    function type() {
      if (i < text.length) {
        p.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }

    type();
    app.scrollTop = app.scrollHeight;
  });
}

async function createAnimatedBanner() {
  const desktopBannerLines = [
    "   _____       _        _                    _____                      _   ",
    "  / ____|     | |      | |                  / ____|                    | |  ",
    " | (___   __ _| | _____| |__   __ _ _ __ _  | |     ___  _ __  ___  ___| | ___",
    "  \\___ \\ / _` | |/ / __| '_ \\ / _` | '_ (_) | |    / _ \\| '_ \\/ __|/ _ \\ |/ _ \\",
    "  ____) | (_| |   < (__| | | | (_| | | | |  | |___| (_) | | | \\__ \\  __/ |  __/",
    " |_____/ \\__,_|_|\\_\\___|_| |_|\\__,_|_| |_|   \\_____\\___/|_| |_|___/\\___|_|\\___|",
    "                                                                                ",
    "  v2025.0                                                           Type 'help'",
  ];

  const mobileBannerLines = [
    " _____       _        _               ",
    "/  ___|     | |      | |              ",
    "\\ `--.  __ _| | _____| |__   __ _ _ __ ",
    " `--. \\/ _` | |/ / __| '_ \\ / _` | '_ \\",
    "/\\__/ / (_| |   < (__| | | | (_| | | | |",
    "\\____/ \\__,_|_|\\_\\___|_| |_|\\__,_|_| |_|",
    "                                       ",
    "v2025.0                      Type 'help'",
  ];

  const isMobile = window.innerWidth < 768;
  const bannerLines = isMobile ? mobileBannerLines : desktopBannerLines;

  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner-container");
  bannerContainer.style.marginBottom = "15px";
  app.appendChild(bannerContainer);

  const themeColors = getThemeColors();
  const baseColor = themeColors.success;
  const secondaryColor = themeColors.secondary;

  for (let i = 0; i < bannerLines.length; i++) {
    const p = document.createElement("p");
    p.style.margin = "0";
    p.style.padding = "0";
    p.style.lineHeight = "1.2";
    p.style.fontFamily = "monospace";
    p.style.whiteSpace = "pre";
    p.style.overflow = "hidden";
    p.style.color = i % 2 === 0 ? baseColor : secondaryColor;
    p.textContent = bannerLines[i];
    bannerContainer.appendChild(p);

    await delay(100);
    p.style.transition = "opacity 0.3s ease-in-out";
    p.style.opacity = "1";
  }

  const cursor = document.createElement("div");
  cursor.innerHTML = "<span class='cursor'>|</span>";
  app.appendChild(cursor);
  await delay(500);
  app.removeChild(cursor);
}

function new_line() {
  const div = document.createElement("div");
  div.setAttribute("class", "terminal-line");
  const promptSpan = document.createElement("span");
  promptSpan.setAttribute("class", "path");
  
  if (window.innerWidth < 400) {
    promptSpan.textContent = `${terminalPrefix}$`;
  } else {
    promptSpan.textContent = `${terminalPrefix}`;

    const span1 = document.createElement("span");
    span1.textContent = "@";

    const span2 = document.createElement("span");
    span2.textContent = "terminal_portfolio";

    promptSpan.appendChild(span1);
    promptSpan.appendChild(span2);
  }

  const inputContainer = document.createElement("span");
  inputContainer.setAttribute("class", "input-container");

  const i = document.createElement("i");
  i.textContent = window.innerWidth < 400 ? "$ " : ":~$ ";
  i.setAttribute("class", "icone");

  const input = document.createElement("input");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("spellcheck", "false");
  input.id = "terminal-input";

  div.appendChild(promptSpan);
  inputContainer.appendChild(i);
  inputContainer.appendChild(input);
  div.appendChild(inputContainer);

  app.appendChild(div);
  input.focus();

  app.scrollTop = app.scrollHeight;
}

function removeInput() {
  const terminalLine = document.querySelector(".terminal-line");
  if (terminalLine) app.removeChild(terminalLine);
}

window.addEventListener("resize", function() {
  updateResponsiveElements();
});

function updateResponsiveElements() {
  const terminalLines = document.querySelectorAll(".terminal-line, .command-history-line");
  
  if (window.innerWidth < 400) {
    terminalLines.forEach(line => {
      line.classList.add("compact-mode");
    });
  } else {
    terminalLines.forEach(line => {
      line.classList.remove("compact-mode");
    });
  }
}

open_terminal();