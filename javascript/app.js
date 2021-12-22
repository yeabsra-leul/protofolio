const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelector(".link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
})