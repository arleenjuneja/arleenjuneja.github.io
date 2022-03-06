const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
