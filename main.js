let button = document.getElementById("toggleMode");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  button.innerHTML = document.body.classList.contains("dark")
    ? "sunny"
    : "rainy";
});
