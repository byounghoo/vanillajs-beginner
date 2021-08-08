const helloForm = document.querySelector(".hello-form");
const hello = document.querySelector(".hello");
const helloTextFirst = document.querySelector(".hello-text--first");
const helloTextSecond = document.querySelector(".hello-text--second");

const HIDDEN_CLASS = "hidden";
const NAME_KEY = "name";

function nameSubmit(e) {
  e.preventDefault();

  const input = document.querySelector(".hello-form input");
  const name = input.value;
  localStorage.setItem(NAME_KEY, name);

  sayHello(name);
}

function sayHello(name) {
  helloTextFirst.innerText = "Hello!";
  helloTextSecond.innerText = name;
  hello.classList.remove(HIDDEN_CLASS);
  helloForm.classList.add(HIDDEN_CLASS);
}

const savedName = localStorage.getItem(NAME_KEY);

if (savedName === null) {
  helloForm.classList.remove(HIDDEN_CLASS);
  hello.classList.add(HIDDEN_CLASS);
  helloForm.addEventListener("submit", nameSubmit);
} else {
  sayHello(savedName);
}