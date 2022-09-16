// Close nav on click

const menuToggle = document.querySelector(".navbar-collapse");
const navlinksEl = document.querySelectorAll(".nav-link");
const toggler = document.querySelector(".navbar-toggler");

const closeLinks = () => {
  menuToggle.classList.toggle("show");
  toggler.classList.toggle("collapsed");
};

navlinksEl.forEach(link => {
  link.addEventListener("click", closeLinks);
});
