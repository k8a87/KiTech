// Close nav on click

const menuToggle = document.querySelector(".navbar-collapse");
const navLinksEl = document.querySelectorAll(".nav-link");
const toggler = document.querySelector(".navbar-toggler");

const closeLinks = () => {
  menuToggle.classList.toggle("show");
  toggler.classList.toggle("collapsed");
};

navLinksEl.forEach((link) => {
  link.addEventListener("click", closeLinks);
});

//Fix scrollspy (helped byCHATGPT)
// Get all the nav links

// Add event listener to scroll
window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY;

  // Iterate over each nav link and check if its corresponding section is in view
  navLinksEl.forEach((link) => {
    const targetSection = document.querySelector(link.getAttribute("href"));
    if (targetSection) {
      const sectionTop = targetSection.offsetTop - 200; // Adjust the offset as needed
      const sectionHeight = targetSection.offsetHeight;

      if (
        currentScroll >= sectionTop &&
        currentScroll < sectionTop + sectionHeight
      ) {
        // Remove 'active' class from all nav links
        navLinksEl.forEach((link) => link.classList.remove("active"));

        // Add 'active' class to the current nav link
        link.classList.add("active");
      }
    }
  });
});

// Manually activate the appropriate navigation item on page load/refresh
window.addEventListener("DOMContentLoaded", function () {
  const currentScroll = window.scrollY;

  // Iterate over each nav link and check if its corresponding section is in view
  navLinksEl.forEach((link) => {
    const targetSection = document.querySelector(link.getAttribute("href"));
    if (targetSection) {
      const sectionTop = targetSection.offsetTop - 50; // Adjust the offset as needed
      const sectionHeight = targetSection.offsetHeight;

      if (
        currentScroll >= sectionTop &&
        currentScroll < sectionTop + sectionHeight
      ) {
        // Add 'active' class to the current nav link
        link.classList.add("active");
      }
    }
  });
});
