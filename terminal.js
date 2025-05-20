const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const commandHistory = [];
let historyIndex = -1;
let terminalPrefix = "sksmagr23";
let currentTheme = "dark";
const themes = {
  dark: {
    background: "#151414",
    text: "#eeeeee",
    success: "#34ff34",
    error: "#ed1400",
    code: "#00aefe",
    prompt: "#34ff34",
    secondary: "#34ff34",
  },
  hacker: {
    background: "#000000",
    text: "#00ff00",
    success: "#00ff00",
    error: "#ff0000",
    code: "#00ffff",
    prompt: "#00ff00",
    secondary: "#ffff00",
  },
  retro: {
    background: "#2E2E2E",
    text: "#ff8800",
    success: "#ffa500",
    error: "#ff0000",
    code: "#ffcc00",
    prompt: "#ffa500",
    secondary: "#ffdd00",
  },
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
    getInputValue();
    removeInput();
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
  createBanner();
  await delay(500);
  createText("Starting terminal server...");
  await delay(1000);
  createText("Server online. Type 'help' to see list of available commands.");
  await delay(500);
  new_line();
}

function createBanner() {
  const banner = `
   _____       _        _                    _____                      _   
  / ____|     | |      | |                  / ____|                    | |  
 | (___   __ _| | _____| |__   __ _ _ __ _  | |     ___  _ __  ___  ___| | ___
  \\___ \\ / _\` | |/ / __| '_ \\ / _\` | '_ (_) | |    / _ \\| '_ \\/ __|/ _ \\ |/ _ \\
  ____) | (_| |   < (__| | | | (_| | | | |  | |___| (_) | | | \\__ \\  __/ |  __/
 |_____/ \\__,_|_|\\_\\___|_| |_|\\__,_|_| |_|   \\_____\\___/|_| |_|___/\\___|_|\\___|
                                                                                
  v2025.0                                                           Type 'help'
`;

  const p = document.createElement("pre");
  p.style.color = themes[currentTheme].success;
  p.textContent = banner;
  app.appendChild(p);
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = `$ ${terminalPrefix}`;
  span1.textContent = "@";
  span2.textContent = "portfolio";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("spellcheck", "false");
  input.id = "terminal-input";
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();

  app.scrollTop = app.scrollHeight;
}

function removeInput() {
  const div = document.querySelector(".type");
  if (div) app.removeChild(div);
}

async function getInputValue() {
  const input = document.querySelector("input");
  if (!input) return;

  const value = input.value.trim();
  const args = value.split(" ");
  const command = args[0].toLowerCase();

  if (command === "help") {
    trueValue(value);
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
  } else if (command === "projects") {
    trueValue(value);
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
    trueValue(value);
    const aboutContainer1 = document.createElement("p");
    const aboutContainer2 = document.createElement("p");
    app.appendChild(aboutContainer1);
    app.appendChild(aboutContainer2);

    new Typed(aboutContainer1, {
      strings: [
        "Hey there! 👋 I'm <strong>Saksham Agrawal</strong>, Sophomore at IIT (BHU) Varanasi with an endless curiosity for web development. From designing intuitive user experiences to engineering powerful backends, I'm all about bringing the best of both worlds to life :D",
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
    trueValue(value);
    createText("My tech stack:");
    createText(
      "<div class='tech-stack'><i class='fab g fa-2x fa-html5 white' title='HTML5'></i> <i class='fab g fa-12x devicon-css3-plain white mi1' title='CSS3'></i><i class='fab g fa-12x fa-js-square white mi' title='JavaScript'></i><i class='fab g fa-2x fa-react white mi' title='React'></i><i class='devicon-nextjs-original-wordmark g fa-2x fab mi' title='Next.js'></i><i class='fab g fa-2x mi fa-node white' title='Node.js'></i><i class='fab g fa-2x mi fa-python white' title='Python'></i><i class='devicon-go-plain fa-2x g fab mi' title='Go'></i><i class='devicon-cplusplus-plain g fa-2x fab mi' title='C++'></i><i class='fab fa-2x g fa-git-alt mi white' title='Git'></i><i class='fab g fa-2x fa-linux mi white' title='Linux'></i></div>"
    );
  } else if (command === "stats") {
    trueValue(value);
    createText("GitHub Stats:");
    createText(
      "<img class='github-stats' src=https://github-readme-stats.vercel.app/api?username=sksmagr23&count_private=true&show_icons=true&theme=ocean_dark&hide_border=true&hide_rank=true&include_all_commits=true&show=prs_merged_percentage&hide_title=true&text_color=00ff00&bg_color=45,151414,151414></img>"
    );
  } else if (command === "connect") {
    trueValue(value);
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
    trueValue(value);
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
      .querySelectorAll("p, section, pre")
      .forEach((e) => e.parentNode.removeChild(e));
  } else if (command === "theme") {
    trueValue(value);
    if (args.length > 1) {
      const requestedTheme = args[1].toLowerCase();
      if (themes[requestedTheme]) {
        setTheme(requestedTheme);
        createText(`Switched to ${requestedTheme} theme.`);
      } else {
        createText(
          `Theme '${requestedTheme}' not found. Available themes: dark, hacker, retro`,
          "error"
        );
      }
    } else {
      createText(
        "Usage: theme [name]. Available themes: dark, hacker, retro"
      );
    }
  } else if (command === "echo") {
    trueValue(value);
    const message = args.slice(1).join(" ");
    if (message) {
      createText(message);
    } else {
      createText("Usage: echo [message]");
    }
  } else if (command === "education") {
    trueValue(value);
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
  }  else if (command === "resume") {
    trueValue(value);
    createText("My Resume:");
    createText(`
  <div class="resume-section">
    <a href="/Resume.pdf" target="_blank" class="resume-download-btn">Download PDF Resume</a>
  </div>
    `);
  } else if (value === "") {
  } else {
    falseValue(value);
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
