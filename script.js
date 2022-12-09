const submit = document.querySelector(".submit");
const form = document.querySelector(".form");
const input = document.querySelectorAll(".inpu");

submit.addEventListener("mouseover", () => {
  form.classList.add("hover");
  submit.classList.add("button");
  input[0].classList.add("input");
  input[1].classList.add("input");
});
submit.addEventListener("mouseleave", () => {
  form.classList.remove("hover");
  submit.classList.remove("button");
  input[0].classList.remove("input");
  input[1].classList.remove("input");
});
