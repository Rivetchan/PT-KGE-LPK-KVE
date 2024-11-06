function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        setTimeout(() => {
            element.classList.add('visible');
        }, 100);
    });
});
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

document.querySelector(".about > a").addEventListener("click", function(event) {
    event.preventDefault();
    const subMenu = this.nextElementSibling;
    subMenu.classList.toggle("active");
});