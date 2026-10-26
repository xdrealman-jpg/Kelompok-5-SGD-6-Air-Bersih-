const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY >= 150) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.classList.remove("active");
    });
});