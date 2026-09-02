const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


// Mobile menu
menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });

});