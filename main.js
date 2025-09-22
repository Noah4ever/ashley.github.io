let button = document.getElementById("toggleMode");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  button.innerHTML = document.body.classList.contains("dark")
    ? "sunny"
    : "rainy";
});

const schools = document.querySelectorAll(".school");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // sichtbar machen
      } else {
        entry.target.classList.remove("show"); // ausblenden beim Hochscrollen
      }
    });
  },
  { threshold: 0.2 }
);

schools.forEach((school) => {
  observer.observe(school);
});
