const btnMaisProjeto = document.getElementById("maisprojetos");

btnMaisProjeto.addEventListener("click", () => {
    btnMaisProjeto.innerText = "Em andamento";

    setInterval(() => {
        btnMaisProjeto.innerText = "Ver mais projetos";
    }, 3000);
})

// Botão do menu de celular

const btn_mobile = document.getElementById("btn-mobile");
const btn_mobile_icon = document.getElementById("btn-mobile-icon");
const menu_mobile = document.getElementById("links");

btn_mobile.addEventListener("click", () => {
    menu_mobile.classList.toggle("ativo");
    if (btn_mobile_icon.classList.contains("bi-list")) {
        btn_mobile_icon.classList.remove("bi-list");
        btn_mobile_icon.classList.add("bi-x-lg");
    } else {
        btn_mobile_icon.classList.remove("bi-x-lg");
        btn_mobile_icon.classList.add("bi-list");
    }
})