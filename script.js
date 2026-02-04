const yes = document.getElementById("yes");
const no = document.getElementById("no");
const question = document.getElementById("question");
const scene = document.getElementById("scene");
const heartsContainer = document.querySelector(".hearts");

// BOTÓN NO ESCAPA
no.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;
});

// BOTÓN SÍ
yes.addEventListener("click", () => {
  question.classList.add("hidden");
  scene.classList.remove("hidden");
  spawnHearts();
});

// CORAZONES PIXEL
function spawnHearts() {
  setInterval(() => {
    const heart = document.createElement("img");
    heart.src = "hearts.png"; // corazón pixel
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 200);
}

