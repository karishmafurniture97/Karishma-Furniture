function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("nav-menu").classList.remove("active");
}

document.getElementById("year").textContent =
    new Date().getFullYear();
