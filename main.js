let button = document.getElementById("toggleMode");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  button.innerHTML = document.body.classList.contains("dark")
    ? "sunny"
    : "rainy";

  body.classList.add("animate-gradient");
  setTimeout(() => body.classList.remove("animate-gradient"), 1500);
});

const schools = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // sichtbar machen
      }
    });
  },
  {
    threshold: 0.6,
  }
);

schools.forEach((school) => {
  observer.observe(school);
});

const icons = document.querySelectorAll(".icon-skill");

icons.forEach((icon) => {
  observer.observe(icon);
});
