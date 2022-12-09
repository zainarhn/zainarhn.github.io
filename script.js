const submit = document.querySelector(".submit");
const form = document.querySelector(".form");

submit.addEventListener("mouseover", () => {
  form.classList.add("hover");
});
submit.addEventListener("mouseleave", () => {
  form.classList.remove("hover");
});
