
//Ação ao clicar enter (keyCode == 13) <-- enter
document.getElementById("main-search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("botaoBusca").click();
    }
});

