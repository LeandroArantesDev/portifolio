// Fecha o menu_mobile ao clicar em qualquer link do menu
const links_menu = document.querySelectorAll('#links a');
links_menu.forEach(link => {
    link.addEventListener('click', () => {
        menu_mobile.classList.remove('ativo');
        btn_mobile_icon.classList.remove('bi-x-lg');
        btn_mobile_icon.classList.add('bi-list');
    });
});
// Botão do menu de celular

const btn_mobile = document.getElementById("btn-mobile");
const btn_mobile_icon = document.getElementById("btn-mobile-icon");
const menu_mobile = document.getElementById("links");

btn_mobile.addEventListener("click", () => {
    if (btn_mobile_icon.classList.contains("bi-list")) {
        btn_mobile_icon.classList.remove("bi-list");
        btn_mobile_icon.classList.add("bi-x-lg");
    } else {
        btn_mobile_icon.classList.remove("bi-x-lg");
        btn_mobile_icon.classList.add("bi-list");
    }
    menu_mobile.classList.toggle("ativo");
})