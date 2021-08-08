const body = document.body;
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const image = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `image/${image}`;
bgImage.className = "bg-image";

body.appendChild(bgImage);

function bgResize() {
  const imageW = bgImage.width;
  const imageH = bgImage.height;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  if (imageH < screenH) {
    bgImage.style.width = "auto";
    bgImage.style.height = "100vh";
  } else if (imageW < screenW) {
    bgImage.style.width = "100vw";
    bgImage.style.height = "auto";
  }
}

window.addEventListener("resize", bgResize);
window.addEventListener("load", bgResize);