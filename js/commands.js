import { getCurrentTheme, setTheme, getThemeColors, getAvailableThemes } from './theme.js';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
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
  "special",
];

async function processCommand(value, app) {
  const args = value.split(" ");
  const command = args[0].toLowerCase();

  if (command === "help") {
    createText(app, "Available commands:");
    createCode(app, "about", "Who am I and what do I do.");
    createCode(app, "tools", "My Tech Stack.");
    createCode(app, "projects", "My dev projects, leave a star if you like them ;)");
    createCode(app, "stats", "My Github contribution stats :)");
    createCode(app, "connect", "All my social networks. Follow me there :D");
    createCode(app, "education", "My educational background.");
    createCode(app, "resume", "View or download my resume.");
    createCode(app, "date", "Gives the current date and time.");
    createCode(app, "theme", "Change terminal theme");
    createCode(app, "echo", "Repeat whatever you type after the command.");
    createCode(app, "clear", "Clean the terminal.");
    createCode(app, "special", "Never enter this because it will mess our entire internal system (NOT FOR BEGINNERS)");
    createText(app, "\nKeyboard shortcuts:");
    createText(app, "↑ : Navigate to previous commands");
    createText(app, "↓ : Navigate to next commands");
    createText(app, "Tab: Autocomplete commands");
  } else if (command === "projects") {
    createText(
      app,
      "<a href='https://weather-goapi.netlify.app/' target='_blank' class='proj'>⁍ GO Weather API</a> - A weather application using Go backend"
    );
    createText(
      app,
      "<a href='https://codeexchange-3s2g.onrender.com/' target='_blank' class='proj'>⁍ CodeExchange</a> - Prototype of stack overflow with Q&A functionality"
    );
    createText(
      app,
      "<a href='https://todo-react-app-five-kappa.vercel.app/' target='_blank' class='proj'>⁍ TODO App</a> - React-based task management application"
    );
    createText(
      app,
      "<a href='https://github.com/sksmagr23/restaurant-service' target='_blank' class='proj'>⁍ Restaurant E-commerce</a> - Built with Django framework"
    );
    createText(
      app,
      "<a href='https://discord.com/oauth2/authorize?client_id=1316247901420126218' target='_blank' class='proj'>⁍ Discord Bot</a> - A custom Discord bot with various features"
    );
    createText(
      app,
      "<a href='https://shannonntpc.vercel.app/' target='_blank' class='proj'>⁍ AI Renewable Energy Prediction</a> - Predicting energy outputs with ML"
    );
    createText(
      app,
      "Find source code & many more contribs on <a href='https://github.com/sksmagr23' target='_blank' class='proj'><i class='devicon-github-original mi1 fa-x'></i> GitHub</a>"
    );
  } else if (command === "special") {
  createText(app, "<span class='error-text'>⚠️ Initiating security breach simulation...</span>");
  showHackSimulation();
  await delay(7000);
  createText(app, "<span class='error-text'>Just for fun! Only a simulation, no real harm done. 😄</span>");
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
    createText(app, "My tech stack:");
    createText(
      app,
      "<div class='tech-stack'><i class='devicon-html5-plain g fa-2x white' title='HTML5'></i> <i class='devicon-css3-plain g fa-12x white mi1' title='CSS3'></i><i class='devicon-javascript-plain g fa-12x white mi' title='JavaScript'></i><i class='devicon-react-original g fa-2x white mi' title='React'></i><i class='devicon-nextjs-original-wordmark g fa-2x mi' title='Next.js'></i><i class='devicon-nodejs-plain g fa-2x mi white' title='Node.js'></i><i class='devicon-python-plain g fa-2x mi white' title='Python'></i><i class='devicon-go-plain fa-2x g mi' title='Go'></i><i class='devicon-cplusplus-plain g fa-2x mi' title='C++'></i><i class='devicon-git-plain g fa-2x mi white' title='Git'></i><i class='devicon-linux-plain g fa-2x mi white' title='Linux'></i></div>"
    );
  } else if (command === "stats") {
    createText(app, "GitHub Stats:");
    const currentThemeColors = getThemeColors();
    createText(
      app,
      `<img class='github-stats' src=https://github-readme-stats.vercel.app/api?username=sksmagr23&count_private=true&show_icons=true&hide_border=true&hide_rank=true&include_all_commits=true&show=prs_merged_percentage&hide_title=true&text_color=${currentThemeColors.success.replace(
        "#",
        ""
      )}&bg_color=45,${currentThemeColors.githubStats.replace("#", "")},${currentThemeColors.githubStats.replace(
        "#",
        ""
      )}></img>`
    );
  } else if (command === "connect") {
    createText(
      app,
      "<a href='https://github.com/sksmagr23' target='_blank' class='link'><i class='devicon-github-original'></i> github.com/sksmagr23</a>"
    );
    createText(
      app,
      "<a href='https://www.linkedin.com/in/saksham-agrawal-a10387286/' target='_blank' class='link1'><i class='devicon-linkedin-plain'></i> linkedin.com/in/saksham-agrawal</a>"
    );
    createText(
      app,
      "<a href='https://www.instagram.com/saksham_verse_24/' target='_blank' class='link2'> <i class='fa-brands fa-instagram'></i> instagram.com/saksham_verse_24</a>"
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
    createText(app, `Current time: ${formattedDate} (IST)`);
  } else if (command === "clear") {
    document
      .querySelectorAll("p, section, pre, .command-history-line")
      .forEach((e) => e.parentNode.removeChild(e));

    return { clearHistory: true };
  } else if (command === "theme") {
    if (args.length > 1) {
      const requestedTheme = args[1].toLowerCase();
      const availableThemes = getAvailableThemes();
      if (availableThemes.includes(requestedTheme)) {
        setTheme(requestedTheme);
        createText(app, `Switched to ${requestedTheme} theme.`);
      } else {
        createText(
          app,
          `Theme '${requestedTheme}' not found. Available themes: ${availableThemes.join(', ')}`,
          "error"
        );
      }
    } else {
      createText(
        app,
        `Usage: theme [name]. Available themes: ${getAvailableThemes().join(', ')}`
      );
    }
  } else if (command === "echo") {
    const message = args.slice(1).join(" ");
    if (message) {
      createText(app, message);
    } else {
      createText(app, "Usage: echo [message]");
    }
  } else if (command === "education") {
    createText(app, `
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
    createText(app, "My Resume:");
    createText(app, `
  <div class="resume-section">
    <a href="/Resume.pdf" target="_blank" class="resume-download-btn">view PDF Resume</a>
  </div>
    `);
  } else if (value === "") {

  } else {
    createText(
      app,
      `Command not found: ${value}. Run 'help' for available commands.`,
      "error"
    );
  }
  
  return {};
}

function createText(app, text, type) {
  const p = document.createElement("p");
  p.innerHTML = text;

  if (type === "error") {
    const currentThemeColors = getThemeColors();
    p.style.color = currentThemeColors.error;
  }
  app.appendChild(p);
  app.scrollTop = app.scrollHeight;
}

function createCode(app, code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code}<span class='text'>: ${text}</span>`;
  app.appendChild(p);
}

function autocomplete(value) {
  if (value) {
    const matches = commands.filter((cmd) => cmd.startsWith(value));
    if (matches.length === 1) {
      return { exactMatch: matches[0] };
    } else if (matches.length > 1) {
      return { multipleMatches: matches };
    }
  }
  return { noMatch: true };
}

function showHackSimulation() {
  const overlay = document.createElement("div");
  overlay.classList.add("hack-overlay");
  const content = document.createElement("div");
  content.classList.add("hack-content");
  
  const skullContainer = document.createElement("div");
  skullContainer.classList.add("skull-container");
  skullContainer.innerHTML = `<img src="/skull.svg" class="skull-image" />`;
  
  const warningBox = document.createElement("div");
  warningBox.classList.add("warning-box");
  warningBox.innerHTML = `
    <div class="warning-header">YOU ARE PHISHED !</div>
    <div class="warning-subheader">SYSTEM COMPROMISED</div>
    <div class="warning-blinker">⚠️ ALL SECURITY PROTOCOLS BYPASSED ⚠️</div>
  `;
  
  const progressContainer = document.createElement("div");
  progressContainer.classList.add("progress-container");
  
  const noiseContainer = document.createElement("div");
  noiseContainer.classList.add("noise");
  
  const terminalHeader = document.createElement("div");
  terminalHeader.classList.add("terminal-header");
  terminalHeader.innerHTML = `
    <span class="terminal-title">BREACH_PROTOCOL.exe</span>
    <span class="terminal-status">STATUS: ACTIVE</span>
  `;
  progressContainer.appendChild(terminalHeader);
  
  const style = document.createElement("style");
  style.textContent = `
    .hack-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.95);
      color: #0f0;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: 'Courier New', monospace;
      overflow: hidden;
    }
    
    .noise {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.05;
      pointer-events: none;
    }
    
    .hack-content {
      position: relative;
      text-align: center;
      max-width: 90%;
      z-index: 1;
    }
    
    .skull-container {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      animation: pulse 2s infinite alternate;
    }
    
    .skull-image {
      width: 150px;
      height: 150px;
      filter: invert(13%) sepia(90%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(116%) drop-shadow(0 0 10pxrgb(255, 25, 25));
    }
    
    .warning-box {
      margin: 20px 0;
      padding: 15px;
      border: 2px solid #ff0000;
      box-shadow: 0 0 15px rgb(204, 255, 0), inset 0 0 15px rgb(204, 255, 0);
      animation: glitch 0.3s infinite, borderPulse 1.5s infinite alternate;
      background-color: rgba(0, 0, 0, 0.8);
    }
    
    .warning-header {
      font-size: 36px;
      font-weight: bold;
      color: #ff0000;
      text-shadow: 0 0 10px #ff0000;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    
    .warning-subheader {
      font-size: 28px;
      color: #ff0000;
      text-shadow: 0 0 8px rgb(255, 0, 0);
      margin-bottom: 15px;
    }
    
    .warning-blinker {
      font-size: 18px;
      color: #0f0;
      text-shadow: 0 0 5px #0f0;
      animation: blink 0.8s infinite;
    }
    
    .terminal-header {
      display: flex;
      justify-content: space-between;
      background: #0a0a0a;
      border-bottom: 1px solid #0f0;
      padding: 5px 10px;
      font-size: 14px;
      margin-bottom: 10px;
    }
    
    .terminal-title {
      color: #0f0;
      font-weight: bold;
    }
    
    .terminal-status {
      color: #ff3333;
      animation: statusBlink 1s infinite;
    }
    
    .progress-container {
      text-align: left;
      margin-top: 10px;
      background-color: rgba(0, 20, 0, 0.8);
      padding: 0;
      border-radius: 5px;
      border: 1px solid #0f0;
      box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
      width: 100%;
      max-width: 600px;
      overflow: hidden;
    }
    
    .progress-item {
      padding: 8px 15px;
      margin: 0;
      border-bottom: 1px dotted rgba(0, 255, 0, 0.3);
      font-family: 'Courier New', monospace;
      position: relative;
    }
    
    .progress-item:before {
      content: ">";
      color: #0f0;
      margin-right: 10px;
    }
    
    @keyframes statusBlink {
      0%, 49% { color: #ff3333; }
      50%, 100% { color: #990000; }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.05); }
    }
    
    @keyframes blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0.3; }
    }
    
    @keyframes borderPulse {
      0% { box-shadow: 0 0 15px #ff0000, inset 0 0 15px #ff0000; }
      100% { box-shadow: 0 0 25px #ff0000, inset 0 0 25px #ff0000; }
    }
    
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
    
    .scan-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 255, 0, 0.1) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      animation: scanline 6s linear infinite;
      pointer-events: none;
      z-index: 2;
    }
    
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
  `;
  
  document.head.appendChild(style);
  
  const progressItems = [
    "Bypassing system firewall... [COMPLETE]",
    "Accessing root directory... [COMPLETE]",
    "Disabling security protocols... [COMPLETE]",
    "Exfiltrating personal data (13.7GB)... [76%]",
    "Installing persistent backdoor via kernel exploit... [42%]",
    "Corrupting system files and boot sector... [18%]",
    "Setting up remote access trojan... [INITIALIZING]"
  ];
  
  const scanLine = document.createElement("div");
  scanLine.classList.add("scan-line");
  overlay.appendChild(scanLine);
  overlay.appendChild(noiseContainer);
  
  content.appendChild(skullContainer);
  content.appendChild(warningBox);
  content.appendChild(progressContainer);
  overlay.appendChild(content);
  document.body.appendChild(overlay);
  
  progressItems.forEach((item, index) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = item;
      p.classList.add("progress-item");
      progressContainer.appendChild(p);
      
      // Add typing sound effect
      const audio = new Audio();
      audio.volume = 0.5;
      audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
      audio.play();
      
    }, index * 500);
  });
  
  setTimeout(() => {
    overlay.style.animation = "none";
    overlay.style.opacity = "1";
    setTimeout(() => {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(overlay);
        document.head.removeChild(style);
      }, 400);
    }, 400);
  }, 7000);
}

export { processCommand, commands, autocomplete, createText, createCode };