const yes = document.getElementById("yes");
const no = document.getElementById("no");
const question = document.getElementById("question");
const scene = document.getElementById("scene");
const heartsContainer = document.querySelector(".hearts");

// BOTÓN NO HUYE
no.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
});

// BOTÓN SÍ
yes.addEventListener("click", () => {
  question.classList.add("hidden");
  scene.classList.remove("hidden");
  spawnHearts();
});
