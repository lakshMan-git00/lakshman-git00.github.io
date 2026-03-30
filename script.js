document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkMode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const navLink = document.querySelectorAll(".navLink");
  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navLink");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop - 80) {
        currentSection = section.getAttribute("id");
      }

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  function disableDeveloper() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) {
        e.preventDefault();
      }
      if (e.key === "F12") {
        e.preventDefault();
      }
    });
  }
  disableDeveloper();
});
