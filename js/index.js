const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");
const toDoDiv = document.querySelector(".todo");

function textResize() {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  if (screenH < screenW) {
    leftSection.style.left = "10vw";
    helloForm.style.left = "10vw";

    rightSection.style.right = "10vw";
    rightSection.style.bottom = "28vmin";
    toDoDiv.style.height = "50vh";
  } else {
    leftSection.style.left = "10vmin";
    helloForm.style.left = "10vmin";

    rightSection.style.right = "10vmin";
    rightSection.style.bottom = "25vmin";
    toDoDiv.style.height = "45vh";
  }
}

window.addEventListener("resize", textResize);
window.addEventListener("load", textResize);
