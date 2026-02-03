const scene = document.querySelector(".scene");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.opacity = Math.random();

  scene.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 200);

