// ================================
// PORTFOLIO JAVASCRIPT
// ================================


// Page load animation
window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


// Smooth navigation
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Scroll reveal effect
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-content, .contact-content"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    observer.observe(card);

});


// Current year automatically
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        "© " + year + " Isha Ipsita. All Rights Reserved.";

}


/* ================================
   DARK MODE TOGGLE
================================ */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("portfolio-theme", "dark");

            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("portfolio-theme", "light");

            themeToggle.textContent = "🌙";

        }

    });

}