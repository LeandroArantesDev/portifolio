const header = document.querySelector("header");
const logo = document.getElementById("logo");
const fonte = document.querySelector("header a");

window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
        header.classList.add("scrolled");
        logo.src = "assets/images/logo_branco.png";
        fonte.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        logo.src = "assets/images/logo_preto.png";
        fonte.classList.remove("scrolled");
    }
})