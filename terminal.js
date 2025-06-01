const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const commandHistory = [];
let historyIndex = -1;
let terminalPrefix = "sksm_agr";
let currentTheme = "dark";
const themes = {
  dark: {
    background: "#191919",
    text: "#f8f8f8",
    success: "#29ff29",
    error: "#ff1b33",
    code: "#0bb0fe",
    prompt: "#0ef36a",
    secondary: "#9efd9f",
    banner: "#29ff29",
    githubStats: "#151414",
    link: "#4ad0fd",
    linkHover: "#29ff29",
    inputBackground: "#1b1b1b",
    border: "#333333",
    selection: "#264f78",
  },
  hacker: {
    background: "#0b0b0b",
    text: "#00ff00",
    success: "#00ff00",
    error: "#ff0000",
    code: "#00ffff",
    prompt: "#00ff00",
    secondary: "#ffff00",
    banner: "#00ff00",
    githubStats: "#0a0a0a",
    link: "#00ff00",
    linkHover: "#66ff66",
    inputBackground: "#0f1c0f",
    border: "#005000",
    selection: "#003300",
  },
  retro: {
    background: "#2b2b2b",
    text: "#ffa94d",
    success: "#ffa500",
    error: "#ff0000",
    code: "#ffcc00",
    prompt: "#ffa500",
    secondary: "#ffdd00",
    banner: "#ffa500",
    githubStats: "#232323",
    link: "#ff8800",
    linkHover: "#ffaa33",
    inputBackground: "#353535",
    border: "#494949",
    selection: "#705237",
  },
  cyberpunk: {
    background: "#0c0335",
    text: "#F000FF",
    success: "#01CDFE",
    error: "#FF0000",
    code: "#01CDFE",
    prompt: "#F000FF",
    secondary: "#FB0094",
    banner: "#01CDFE",
    githubStats: "#07021f",
    link: "#00FFF0",
    linkHover: "#60FFFA",
    inputBackground: "#150650",
    border: "#FB0094",
    selection: "#3d0862",
  },
  ubuntu: {
    background: "#2c001e",
    text: "#ffffff",
    success: "#8AE234",
    error: "#FF5252",
    code: "#729FCF",
    prompt: "#006dff",
    secondary: "#F9F9F9",
    banner: "#F9F9F9",
    githubStats: "#300a24",
    link: "#F5C211",
    linkHover: "#FFDB66",
    inputBackground: "#3a0029",
    border: "#006dff",
    selection: "#77216F",
  }
};

app.addEventListener("keydown", async function (event) {
  const input = document.querySelector("input");
  if (!input) return;

  if (event.key === "Enter") {
    event.preventDefault();
    await delay(150);
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

    await processCommand(value);
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
    autocomplete(input.value);
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  if (input) input.focus();
});

function autocomplete(value) {
  const commands = [
    "help",
    "about",
    "tools",
    "projects",
    "stats",
    "connect",
    "date",
    "clear",
    "theme",
    "education",
    "resume",
    "echo",
  ];

  if (value) {
    const matches = commands.filter((cmd) => cmd.startsWith(value));
    if (matches.length === 1) {
      document.querySelector("input").value = matches[0];
    } else if (matches.length > 1) {
      createText("Available commands:");
      for (const match of matches) {
        createText(`· ${match}`);
      }
    }
  }
}

async function open_terminal() {
  setTheme(currentTheme);
  await delay(200);
  await createAnimatedBanner();
  await delay(300);
  await typeText("Starting terminal server...");

  const loadingP = document.createElement("p");
  loadingP.innerHTML = "<span class='loading-indicator'></span>";
  app.appendChild(loadingP);
  await delay(600);
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
    const speed = 60;

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
  const bannerLines = [
    "   _____       _        _                    _____                      _   ",
    "  / ____|     | |      | |                  / ____|                    | |  ",
    " | (___   __ _| | _____| |__   __ _ _ __ _  | |     ___  _ __  ___  ___| | ___",
    "  \\___ \\ / _` | |/ / __| '_ \\ / _` | '_ (_) | |    / _ \\| '_ \\/ __|/ _ \\ |/ _ \\",
    "  ____) | (_| |   < (__| | | | (_| | | | |  | |___| (_) | | | \\__ \\  __/ |  __/",
    " |_____/ \\__,_|_|\\_\\___|_| |_|\\__,_|_| |_|   \\_____\\___/|_| |_|___/\\___|_|\\___|",
    "                                                                                ",
    "  v2025.0                                                           Type 'help'",
  ];

  const bannerContainer = document.createElement("div");
  bannerContainer.style.marginBottom = "15px";
  app.appendChild(bannerContainer);

  const baseColor = themes[currentTheme].banner;
  const secondaryColor = themes[currentTheme].secondary;

  for (let i = 0; i < bannerLines.length; i++) {
    const p = document.createElement("p");
    p.style.margin = "0";
    p.style.padding = "0";
    p.style.lineHeight = "1.2";
    p.style.fontFamily = "monospace";
    p.style.whiteSpace = "pre";
    p.style.overflow = "hidden";
    p.style.opacity = "0";
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
  promptSpan.textContent = `${terminalPrefix}`;

  const span1 = document.createElement("span");
  span1.textContent = "@";

  const span2 = document.createElement("span");
  span2.textContent = "terminal_portfolio";

  promptSpan.appendChild(span1);
  promptSpan.appendChild(span2);

  const inputContainer = document.createElement("span");
  inputContainer.setAttribute("class", "input-container");

  const i = document.createElement("i");
  i.textContent = ":~$ ";
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

async function processCommand(value) {
  const args = value.split(" ");
  const command = args[0].toLowerCase();

  if (command === "help") {
    createText("Available commands:");
    createCode("about", "Who am I and what do I do.");
    createCode("tools", "My Tech Stack.");
    createCode("projects", "My dev projects, leave a star if you like them ;)");
    createCode("stats", "My Github contribution stats :)");
    createCode("connect", "All my social networks. Follow me there :D");
    createCode("education", "My educational background.");
    createCode("resume", "View or download my resume.");
    createCode("date", "Gives the current date and time.");
    createCode("theme", "Change terminal theme");
    createCode("echo", "Repeat whatever you type after the command.");
    createCode("clear", "Clean the terminal.");
    createText("\nKeyboard shortcuts:");
    createText("↑ : Navigate to previous commands");
    createText("↓ : Navigate to next commands");
    createText("Tab: Autocomplete commands");
  } else if (command === "projects") {
    createText(
      "<a href='https://weather-goapi.netlify.app/' target='_blank' class='proj'>⁍ GO Weather API</a> - A weather application using Go backend"
    );
    createText(
      "<a href='https://codeexchange-3s2g.onrender.com/' target='_blank' class='proj'>⁍ CodeExchange</a> - Prototype of stack overflow with Q&A functionality"
    );
    createText(
      "<a href='https://todo-react-app-five-kappa.vercel.app/' target='_blank' class='proj'>⁍ TODO App</a> - React-based task management application"
    );
    createText(
      "<a href='https://github.com/sksmagr23/restaurant-service' target='_blank' class='proj'>⁍ Restaurant E-commerce</a> - Built with Django framework"
    );
    createText(
      "<a href='https://discord.com/oauth2/authorize?client_id=1316247901420126218' target='_blank' class='proj'>⁍ Discord Bot</a> - A custom Discord bot with various features"
    );
    createText(
      "<a href='https://shannonntpc.vercel.app/' target='_blank' class='proj'>⁍ AI Renewable Energy Prediction</a> - Predicting energy outputs with ML"
    );
    createText(
      "Find source code & many more contribs on <a href='https://github.com/sksmagr23' target='_blank' class='proj'><i class='devicon-github-original mi1 fa-x'></i> GitHub</a>"
    );
  } else if (command === "about") {
    const aboutContainer1 = document.createElement("p");
    const aboutContainer2 = document.createElement("p");
    app.appendChild(aboutContainer1);
    app.appendChild(aboutContainer2);

    new Typed(aboutContainer1, {
      strings: [
        "Hey there! 👋 I'm <strong>Saksham Agrawal</strong>, Pre-Final Year at IIT (BHU) Varanasi with an endless curiosity for web development. From designing intuitive user experiences to engineering powerful backends, I'm all about bringing the best of both worlds to life :D",
      ],
      typeSpeed: 20,
      showCursor: false,
      onComplete: () => {
        new Typed(aboutContainer2, {
          strings: [
            "When I'm not coding, you'll probably find me exploring the latest tech trends, figuring out how to break and rebuild things just for fun. I'm always excited to collaborate on cool projects, brainstorm wild ideas, and turn them into something real and impactful. So, if you're into pushing boundaries, let's connect and create something epic together! 💡💻",
          ],
          typeSpeed: 20,
          showCursor: false,
        });
      },
    });
  } else if (command === "tools") {
    createText("My tech stack:");
    createText(
      "<div class='tech-stack'><i class='fab g fa-2x fa-html5 white' title='HTML5'></i> <i class='fab g fa-12x devicon-css3-plain white mi1' title='CSS3'></i><i class='fab g fa-12x fa-js-square white mi' title='JavaScript'></i><i class='fab g fa-2x fa-react white mi' title='React'></i><i class='devicon-nextjs-original-wordmark g fa-2x fab mi' title='Next.js'></i><i class='fab g fa-2x mi fa-node white' title='Node.js'></i><i class='fab g fa-2x mi fa-python white' title='Python'></i><i class='devicon-go-plain fa-2x g fab mi' title='Go'></i><i class='devicon-cplusplus-plain g fa-2x fab mi' title='C++'></i><i class='fab fa-2x g fa-git-alt mi white' title='Git'></i><i class='fab g fa-2x fa-linux mi white' title='Linux'></i></div>"
    );
  } else if (command === "stats") {
    createText("GitHub Stats:");
    createText(
      `<img class='github-stats' src=https://github-readme-stats.vercel.app/api?username=sksmagr23&count_private=true&show_icons=true&hide_border=true&hide_rank=true&include_all_commits=true&show=prs_merged_percentage&hide_title=true&text_color=${themes[currentTheme].success.replace(
        "#",
        ""
      )}&bg_color=45,${themes[currentTheme].githubStats.replace("#", "")},${themes[currentTheme].githubStats.replace(
        "#",
        ""
      )}></img>`
    );
  } else if (command === "connect") {
    createText(
      "<a href='https://github.com/sksmagr23' target='_blank' class='link'><i class='fab fa-github'></i> github.com/sksmagr23</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/saksham-agrawal-a10387286/' target='_blank' class='link1'><i class='fab fa-linkedin-in'></i> linkedin.com/in/saksham-agrawal</a>"
    );
    createText(
      "<a href='https://www.instagram.com/saksham_verse_24/' target='_blank' class='link2'><i class='fab fa-instagram'></i> instagram.com/saksham_verse_24</a>"
    );
  } else if (command === "date") {
    const now = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    const formattedDate = now.toLocaleString("en-US", options);
    createText(`Current time: ${formattedDate} (IST)`);
  } else if (command === "clear") {
    document
      .querySelectorAll("p, section, pre, .command-history-line")
      .forEach((e) => e.parentNode.removeChild(e));

    commandHistory.length = 0;
    historyIndex = -1;
  } else if (command === "theme") {
    if (args.length > 1) {
      const requestedTheme = args[1].toLowerCase();
      if (themes[requestedTheme]) {
        setTheme(requestedTheme);
        createText(`Switched to ${requestedTheme} theme.`);
      } else {
        createText(
          `Theme '${requestedTheme}' not found. Available themes: dark, hacker, retro, cyberpunk, ubuntu`,
          "error"
        );
      }
    } else {
      createText(
        "Usage: theme [name]. Available themes: dark, hacker, retro, cyberpunk, ubuntu"
      );
    }
  } else if (command === "echo") {
    const message = args.slice(1).join(" ");
    if (message) {
      createText(message);
    } else {
      createText("Usage: echo [message]");
    }
  } else if (command === "education") {
    createText(`
<div class="education-item">
  <div class="edu-year">2023 - Present</div>
  <div class="edu-details">
    <div class="edu-degree">B.Tech in Chemical Engineering</div>
    <div class="edu-school">Indian Institute of Technology (BHU) Varanasi</div>
  </div>
</div>
<div class="education-item">
  <div class="edu-year">2010 - 2023</div>
  <div class="edu-details">
    <div class="edu-degree">High School and Intermediate (CBSE)</div>
    <div class="edu-school">DALIMSS Sunbeam School, Varanasi</div>
  </div>
</div>
    `);
  } else if (command === "resume") {
    createText("My Resume:");
    createText(`
  <div class="resume-section">
    <a href="/Resume.pdf" target="_blank" class="resume-download-btn">Download PDF Resume</a>
  </div>
    `);
  } else if (value === "") {
  } else {
    createText(
      `Command not found: ${value}. Run 'help' for available commands.`,
      "error"
    );
  }
}

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
  root.style.setProperty("--banner-color", themes[theme].banner);
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
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, type) {
  const p = document.createElement("p");
  p.innerHTML = text;

  if (type === "error") {
    p.style.color = themes[currentTheme].error;
  }
  app.appendChild(p);
  app.scrollTop = app.scrollHeight;
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code}<span class='text'>: ${text}</span>`;
  app.appendChild(p);
}

open_terminal();
