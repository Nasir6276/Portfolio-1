const navToggle = document.querySelector(".toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", function() {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        document.body.classList.remove("nav-open");
    });
});