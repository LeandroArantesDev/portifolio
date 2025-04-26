const header = document.querySelector("header");
const fonte = document.querySelector("header a");
const fontei = document.querySelector("header i");

window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
        header.classList.add("scrolled");
        fonte.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        fonte.classList.remove("scrolled");
    }
})