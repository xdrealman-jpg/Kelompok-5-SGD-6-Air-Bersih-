const navbar = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

function updateNavbar() {

    if (window.scrollY >= 150 || nav.classList.contains("active")) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

}

// Scroll
window.addEventListener("scroll", updateNavbar);

// Klik hamburger
hamburger.addEventListener("click", () => {

    nav.classList.toggle("active");
    hamburger.classList.toggle("active");

    updateNavbar();

});

// Klik menu
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        hamburger.classList.remove("active");

        updateNavbar();

    });

});