const elementos = document.querySelectorAll('.animar');
const btnTema = document.querySelector(".btn-tema")
const body = document.querySelector("body");

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('ativo');
        }
    });
}, {
    threshold: 0.1 // porcentagem visível para ativar (10%)
});

elementos.forEach((el) => observer.observe(el));

btnTema.addEventListener("click", function () {
    body.classList.toggle("dark-tema");
    const icon = document.querySelector('.btn-tema i');
    if (body.classList.contains("dark-tema")) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const icon = document.querySelector('.btn-tema i');
    const theme = localStorage.getItem('tema');
    if (theme === 'dark') {
        body.classList.add('dark-tema');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        body.classList.remove('dark-tema');

    }
});    