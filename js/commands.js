import { getCurrentTheme, setTheme, getThemeColors, getAvailableThemes } from './theme.js';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const commands = [
  "init",
  "about",
  "internships",
  "tools",
  "skills",
  "projects",
  "achievements",
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

  if (command === "init") {
    createText(app, "Available commands:");
    createCode(app, "about", "Who am I and what do I do.");
    createCode(app, "internships", "My internship experience.");
    createCode(app, "tools", "My Tech Stack & Skills");
    createCode(app, "projects", "My dev projects, leave a star if you like them ;)");
    createCode(app, "achievements", "My honours and achievements.");
    createCode(app, "stats", "My Github contribution stats :)");
    createCode(app, "connect", "All my social networks. Follow me there :D");
    createCode(app, "education", "My educational background.");
    createCode(app, "resume", "View or download my resume.");
    createCode(app, "date", "Gives the current date and time.");
    createCode(app, "theme", "Change terminal theme");
    createCode(app, "echo", "Repeat whatever you type after the command.");
    createCode(app, "clear", "Clean the terminal.");
    createCode(app, "special", "Never enter this because it will mess my entire internal system (NOT FOR BEGINNERS)");
    createText(app, "\nKeyboard shortcuts:");
    createText(app, "↑ : Navigate to previous commands");
    createText(app, "↓ : Navigate to next commands");
    createText(app, "Tab: Autocomplete commands");
  } else if (command === "internships" || command === "internship" || command === "experience") {
    createText(app, `
<div class="internship-item">
  <div class="edu-year">May 2026 - July 2026</div>
  <div class="edu-details">
    <div class="edu-degree">Software Developer Intern — Irisidea</div>
    <ul class="internship-bullets">
      <li>Built agentic CRM workflows using <strong>Pydantic</strong> and <strong>Google ADK</strong> for context-aware customer management.</li>
      <li>Integrated <strong>Zoho CRM</strong> with agent tools for lead CRUD, email sending, and one-time &amp; recurring email job scheduling.</li>
      <li>Engineered <strong>dynamic UI rendering</strong> using structured data for intent-driven agent interactions and CRM analytics.</li>
    </ul>
    <div class="internship-tags">
      <span class="tech-tag">FastAPI</span>
      <span class="tech-tag">Google ADK</span>
      <span class="tech-tag">Zoho CRM</span>
      <span class="tech-tag">Agentic AI</span>
      <span class="tech-tag">Dynamic UI</span>
    </div>
  </div>
</div>
    `);
  } else if (command === "projects") {
    createText(app, `
<div class="projects-list">
  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/sksmagr23/QueryPilot" target="_blank" class="project-title">⁍ QueryPilot</a>
      <div class="project-links">
        <a href="https://github.com/sksmagr23/QueryPilot" target="_blank" class="proj-link">GitHub ↗</a>
      </div>
    </div>
    <div class="project-desc">An Agentic analytics platform that translates natural-language business questions into validated SQL queries, estimates database execution cost, runs queries safely on a read-only connection, and delivers interactive charts, queries, and data-backed insights</div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/sksmagr23/url-shortener" target="_blank" class="project-title">⁍ URL Management Service (GoFr SOC'25)</a>
      <div class="project-links">
        <a href="https://github.com/sksmagr23/url-shortener" target="_blank" class="proj-link">GitHub ↗</a>
      </div>
    </div>
    <div class="project-desc">Gofr based high-performance backend service for URL shortening, link lifecycle management, QR generation, click analytics, authentication, and developer automation</div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/sksmagr23/shannon_frontend" target="_blank" class="project-title">⁍ AI-Powered Renewable Energy Forecasting System</a>
      <div class="project-links">
        <a href="https://github.com/sksmagr23/shannon_frontend" target="_blank" class="proj-link">GitHub ↗</a>
      </div>
    </div>
    <div class="project-desc">Web-based AI-powered renewable energy forecasting system utilizing GRU and XGBoost to accurately predict solar and wind energy generation from historical weather data, achieving an R² score of 0.7359</div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <a href="https://codeexchange-3s2g.onrender.com/" target="_blank" class="project-title">⁍ CodeExchange</a>
      <div class="project-links">
        <a href="https://codeexchange-3s2g.onrender.com/" target="_blank" class="proj-link">Live ↗</a>
      </div>
    </div>
    <div class="project-desc">A simplified web application that replicates core functionalities of Stack Overflow, enabling users to post questions, provide answers, and engage in discussions</div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <a href="https://github.com/sksmagr23/restaurant-service" target="_blank" class="project-title">⁍ Restaurant E-commerce</a>
      <div class="project-links">
        <a href="https://github.com/sksmagr23/restaurant-service" target="_blank" class="proj-link">GitHub ↗</a>
      </div>
    </div>
    <div class="project-desc">Django-based restaurant management web application featuring user authentication, interactive menu browsing, cart management, seamless checkout, order summaries, order history, and personalized user profiles</div>
  </div>
</div>
    `);
    createText(
      app,
      "Find source code &amp; many more contribs on <a href='https://github.com/sksmagr23' target='_blank' class='proj'><i class='devicon-github-original mi1 fa-x'></i> GitHub</a>"
    );
  } else if (command === "achievements" || command === "achievement") {
    createText(app, `
<div class="achievements-list">
  <div class="achievement-item"><span class="achievement-badge">🏆</span><span>Secured <strong>2nd position</strong> in the <strong>Hack It Out</strong> hackathon at <strong>Technex '25 (IIT BHU)</strong>.</span></div>
  <div class="achievement-item"><span class="achievement-badge">🚀</span><span><strong>National Semi-Finalist</strong> at <strong>Flipkart GRiD 8.0</strong> (SDE Track).</span></div>
  <div class="achievement-item"><span class="achievement-badge">🌟</span><span>Selected among the <strong>top 38 contributors</strong> from 109 proposals for <strong>GoFr Summer of Code 2025</strong>, Templates Track.</span></div>
  <div class="achievement-item"><span class="achievement-badge">🎓</span><span>Received the <strong>Achievers Award</strong> as <strong>Science Stream Topper</strong> in XII board (Sub-Topper: Chemistry &amp; Maths).</span></div>
</div>
    `);
  } else if (command === "special") {
  createText(app, "<span class='error-text'>⚠️ Initiating security breach simulation...</span>");
  HackSimulation();
  await delay(7000);
  createText(app, "<span class='error-text'>Just for fun! Only a simulation, no real harm done. 😄</span>");
} else if (command === "about") {
    const aboutContainer1 = document.createElement("p");
    const aboutContainer2 = document.createElement("p");
    app.appendChild(aboutContainer1);
    app.appendChild(aboutContainer2);

    new Typed(aboutContainer1, {
      strings: [
        "Hey there! 👋 I'm <strong>Saksham</strong>, a final Year student at IIT BHU passionate about building intelligent Agents, scalable backend systems, and automation platforms. I enjoy turning complex workflows into seamless user experiences powered by modern LLMs and real-world integrations :D",
      ],
      typeSpeed: 20,
      showCursor: false,
      onComplete: () => {
        new Typed(aboutContainer2, {
          strings: [
            "Lately, I've been working with AI agent frameworks, MCP, CRM automations, and multi-agent workflows—building systems that don't just answer questions, but take actions. Whether it's orchestrating autonomous agents, integrating enterprise APIs, or designing production-ready backends, I love creating stuff that solves real problems. Let's build the next generation of intelligent applications together. 🚀",
          ],
          typeSpeed: 20,
          showCursor: false,
        });
      },
    });
  } else if (command === "tools" || command === "skills") {
    const accentHex = getThemeColors().success.replace("#", "");
    createText(app, "My tech stack &amp; skills:");
    createText(
      app,
      `
<div class="tech-category">
  <div class="tech-category-title">Languages</div>
  <div class="tech-stack">
    <span class="tech-item" title="C++"><i class="devicon-cplusplus-plain g fa-2x"></i><span class="tech-label">C++</span></span>
    <span class="tech-item" title="Python"><i class="devicon-python-plain g fa-2x"></i><span class="tech-label">Python</span></span>
    <span class="tech-item" title="JavaScript"><i class="devicon-javascript-plain g fa-2x"></i><span class="tech-label">JavaScript</span></span>
    <span class="tech-item" title="TypeScript"><i class="devicon-typescript-plain g fa-2x"></i><span class="tech-label">TypeScript</span></span>
    <span class="tech-item" title="Go"><i class="devicon-go-plain g fa-2x"></i><span class="tech-label">Go</span></span>
    <span class="tech-item" title="SQL"><img src="https://api.iconify.design/tabler/sql.svg?color=%23${accentHex}" alt="SQL" class="tech-icon" /><span class="tech-label">SQL</span></span>
  </div>
</div>
<div class="tech-category">
  <div class="tech-category-title">Technologies</div>
  <div class="tech-stack">
    <span class="tech-item" title="HTML5"><i class="devicon-html5-plain g fa-2x"></i><span class="tech-label">HTML5</span></span>
    <span class="tech-item" title="CSS3"><i class="devicon-css3-plain g fa-2x"></i><span class="tech-label">CSS3</span></span>
    <span class="tech-item" title="React.js"><i class="devicon-react-original g fa-2x"></i><span class="tech-label">React.js</span></span>
    <span class="tech-item" title="Next.js"><i class="devicon-nextjs-original-wordmark g fa-2x"></i><span class="tech-label">Next.js</span></span>
    <span class="tech-item" title="Node.js"><i class="devicon-nodejs-plain g fa-2x"></i><span class="tech-label">Node.js</span></span>
    <span class="tech-item" title="Express.js"><i class="devicon-express-original g fa-2x"></i><span class="tech-label">Express.js</span></span>
    <span class="tech-item" title="EJS"><img src="https://cdn.simpleicons.org/ejs/${accentHex}" alt="EJS" class="tech-icon" /><span class="tech-label">EJS</span></span>
    <span class="tech-item" title="Tailwind CSS"><i class="devicon-tailwindcss-plain g fa-2x"></i><span class="tech-label">Tailwind</span></span>
    <span class="tech-item" title="FastAPI"><i class="devicon-fastapi-plain g fa-2x"></i><span class="tech-label">FastAPI</span></span>
    <span class="tech-item" title="GoFr"><img src="https://gofr.dev/favicon.ico" alt="GoFr" class="tech-icon" /><span class="tech-label">GoFr</span></span>
    <span class="tech-item" title="LangGraph"><img src="https://cdn.simpleicons.org/langgraph/${accentHex}" alt="LangGraph" class="tech-icon" /><span class="tech-label">LangGraph</span></span>
    <span class="tech-item" title="Google ADK"><img src="https://google.github.io/adk-docs/assets/agent-development-kit.png" alt="Google ADK" class="tech-icon" /><span class="tech-label">Google ADK</span></span>
    <span class="tech-item" title="Pydantic"><img src="https://cdn.simpleicons.org/pydantic/${accentHex}" alt="Pydantic" class="tech-icon" /><span class="tech-label">Pydantic</span></span>
    <span class="tech-item" title="Gemini"><img src="/assets/gemini.svg" alt="Gemini" class="tech-icon" /><span class="tech-label">Gemini</span></span>
  </div>
</div>
<div class="tech-category">
  <div class="tech-category-title">Tools &amp; Platforms</div>
  <div class="tech-stack">
    <span class="tech-item" title="Git"><i class="devicon-git-plain g fa-2x"></i><span class="tech-label">Git</span></span>
    <span class="tech-item" title="GitHub"><i class="devicon-github-original g fa-2x"></i><span class="tech-label">GitHub</span></span>
    <span class="tech-item" title="Docker"><i class="devicon-docker-plain g fa-2x"></i><span class="tech-label">Docker</span></span>
    <span class="tech-item" title="Postman"><i class="devicon-postman-plain g fa-2x"></i><span class="tech-label">Postman</span></span>
    <span class="tech-item" title="Linux"><i class="devicon-linux-plain g fa-2x"></i><span class="tech-label">Linux</span></span>
    <span class="tech-item" title="MongoDB"><i class="devicon-mongodb-plain g fa-2x"></i><span class="tech-label">MongoDB</span></span>
    <span class="tech-item" title="Firebase"><i class="devicon-firebase-plain g fa-2x"></i><span class="tech-label">Firebase</span></span>
    <span class="tech-item" title="PostgreSQL"><i class="devicon-postgresql-plain g fa-2x"></i><span class="tech-label">PostgreSQL</span></span>
    <span class="tech-item" title="Redis"><i class="devicon-redis-plain g fa-2x"></i><span class="tech-label">Redis</span></span>
    <span class="tech-item" title="Vercel"><i class="devicon-vercel-original g fa-2x"></i><span class="tech-label">Vercel</span></span>
  </div>
</div>
      `
    );
  } else if (command === "stats") {
    createText(app, "GitHub Stats:");
    const currentThemeColors = getThemeColors();
    createText(
      app,
      `<img class='github-stats' src=https://github-stats-extended.vercel.app/api?username=sksmagr23&count_private=true&show_icons=true&hide_border=true&hide_rank=true&include_all_commits=true&show=prs_merged_percentage&hide_title=true&text_color=${currentThemeColors.success.replace(
        "#",
        ""
      )}&bg_color=45,${currentThemeColors.githubStats.replace("#", "")},${currentThemeColors.githubStats.replace(
        "#",
        ""
      )}></img>`
    );
    createText(
  app,
  `<img class='github-activity-graph' style="width:100%; max-width:900px; height:auto;" src="https://github-readme-activity-graph.vercel.app/graph?username=sksmagr23&bg_color=${currentThemeColors.githubStats.replace(
    "#",
    ""
  )}&color=${currentThemeColors.success.replace(
    "#",
    ""
  )}&line=${currentThemeColors.success.replace(
    "#",
    ""
  )}&point=${currentThemeColors.success.replace(
    "#",
    ""
  )}&hide_border=true" />`
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
      "<a href='https://www.instagram.com/sksmagr18' target='_blank' class='link2'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='currentColor' style='vertical-align:-0.15em;'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/></svg> instagram.com/sksmagr18</a>"
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
    <div class="edu-degree">B.Tech in Chemical Engineering & Technology</div>
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
    createText(app, `
  <div class="resume-section">
    <a href="/assets/Resume.pdf" target="_blank" class="resume-download-btn">view PDF Resume</a>
  </div>
    `);
  } else if (value === "") {

  } else {
    createText(
      app,
      `Command not found: ${value}. Run 'init' for available commands.`,
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

function HackSimulation() {
  const overlay = document.createElement("div");
  overlay.classList.add("hack-overlay");
  const content = document.createElement("div");
  content.classList.add("hack-content");
  
  const skullContainer = document.createElement("div");
  skullContainer.classList.add("skull-container");
  skullContainer.innerHTML = `<img src="/assets/skull.svg" class="skull-image" />`;
  
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