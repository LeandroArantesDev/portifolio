const btnMaisProjeto = document.getElementById("maisprojetos");

btnMaisProjeto.addEventListener("click", () => {
    btnMaisProjeto.innerText = "Em andamento";

    setInterval(() => {
        btnMaisProjeto.innerText = "Ver mais projetos";
    }, 3000);
})