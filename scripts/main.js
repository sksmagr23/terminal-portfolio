const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(100);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  await delay(200)
  createText("Holla! welcome to my command line");
  await delay(700);
  createText("Starting Portfolio server...");
  await delay(1500);
  createText("You can now run several commands to navigate through the portfolio.");

  createCode("help", "See all commands in my server.");
  createCode("about", "Who am i and what do i do.");
  createCode("connect", "All my social networks.");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "$ user";
  span1.textContent = " ~/sksm-portfolio";
  p.appendChild(span1);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "help") {
    trueValue(value);

    createCode("about", "Who am i and what do i do.");
    createCode("tools", "My Tech Stack.");
    createCode(
      "projects",
      "My dev projects, leave a star if you like them ;)"
    );
    createCode("stats", "My Github contri stats :)");
    createCode("connect", "All my social networks. Follow me there :D");
    createCode("date", "Gives the current date and time.");
    createCode("clear", "Clean the terminal.");
    
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://weather-goapi.netlify.app/' target='_blank' class='proj'>⁍ GO Weather API</a>"
    );
    createText(
      "<a href='https://codeexchange-3s2g.onrender.com/' target='_blank' class='proj'>⁍ CodeExchange (Prototype of stack overflow)</a>"
    );
    createText(
      "<a href='https://todo-react-app-five-kappa.vercel.app/' target='_blank' class='proj'>⁍ TODO App</a>"
    );
    createText(
      "<a href='https://github.com/sksmagr23/restaurant-service' target='_blank' class='proj'>⁍ Restaurant E-commerce (using django)</a>"
    );
    createText(
      "<a href='https://discord.com/oauth2/authorize?client_id=1316247901420126218' target='_blank' class='proj'>⁍ A discord bot (⁠•⁠_⁠•⁠) created by me </a> ,hope you use it"
    );
    createText(
      "Find many more contribs on <a href='https://github.com/sksmagr23' target='_blank' class='proj'><i class='devicon-github-original mi1 fa-x'></i></a>"
    );
  } else if (value === "about") {
    trueValue(value);
    createText("Hey there! 👋 I’m <strong>Saksham Agrawal</strong>, Sophomore at IIT (BHU) Varanasi with an endless curiosity for web development. From designing intuitive user experiences to engineering powerful backends, I’m all about bringing the best of both worlds to life :D");
    createText(
      "When I’m not coding, you’ll probably find me exploring the latest tech trends, figuring out how to break and rebuild things just for fun . I’m always excited to collaborate on cool projects, brainstorm wild ideas, and turn them into something real and impactful. So, if you’re into pushing boundaries, let’s connect and create something epic together! 💡💻"
    );
  } else if (value === "tools") {
    trueValue(value);
    createText("<i class='fab fa-2x fa-html5 white'></i> <i class='fab fa-12x devicon-css3-plain white mi1'><i class='fab fa-md fa-js-square white mi'></i></i><i class='fab fa-2x fa-react white mi'></i><i class='fab fa-2x mi fa-node white'></i><i class='fab fa-2x mi fa-python white'></i><i class='devicon-go-plain fa-2x fab mi'></i><i class='devicon-cplusplus-plain fa-2x fab mi'></i><i class='fab fa-2x fa-git-alt mi white'></i><i class='fab fa-2x fa-linux mi white'></i>");
  } else if (value === "stats") {
    trueValue(value);
    createText("<img src=https://github-readme-stats.vercel.app/api?username=sksmagr23&count_private=true&show_icons=true&theme=dark&hide_border=true&hide_rank=true&include_all_commits=true&show=prs_merged_percentage&hide_title=true&text_color=ffffff></img>");
  } else if (value === "connect") {
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
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social -a?");
  } else if (value === "date") {
    trueValue(value);
    const now = new Date();
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true, 
      timeZone: 'Asia/Kolkata'
    };
    const formattedDate = now.toLocaleString('en-US', options);
    createText(`${formattedDate}`);
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createText(
      `command not found: ${value}, Run 'help' for commands list`,
      "error"
    );
  }
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
    p.style.color = "red";
  }
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code}<span class='text'>: ${text}</span>`;
  app.appendChild(p);
}

open_terminal();
