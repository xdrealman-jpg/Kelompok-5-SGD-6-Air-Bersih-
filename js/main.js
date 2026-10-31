const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".site-navbar");
const navLinks = document.querySelectorAll(".site-navbar a");

hamburger.addEventListener("click", () => {

    navbar.classList.toggle("active");
    hamburger.innerHTML = navbar.classList.contains("active") ? "✕" : "☰";

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        hamburger.innerHTML = "☰";

    });

});