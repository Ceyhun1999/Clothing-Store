const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav__menu");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active")
    navMenu.classList.toggle("active");
})

const navLink = document.querySelectorAll(".nav__menu-link");

navLink.forEach((item) => {
    item.addEventListener("click", closeMenu)
})

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
}