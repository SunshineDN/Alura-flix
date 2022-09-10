var filmes = [];
var inputs = [document.getElementById("nome"), document.getElementById("filme")];

inputs.forEach(elemento => {
    elemento.addEventListener("keydown", press => {
        if (press.key === "Enter") {
            adicionarFilme();
        }
    })
})

function adicionarFilme() {
    var nome = document.getElementById("nome").value;
    var imagem = document.getElementById("filme").value;
    if (verificarFilme(nome, imagem)) {
        console.log(verificarFilme(nome, imagem))
        alert("Filme já adicionado!")
        document.getElementById("nome").value = "";
        document.getElementById("filme").value = "";
        return
    }

    if (imagem.endsWith(".jpg") || imagem.endsWith(".png")) {
        
        FilmesPush(nome, imagem)
        writeMovie(filmes)
        document.getElementById("nome").value = "";
        document.getElementById("filme").value = "";

    } else if (imagem == "" || nome == "") {
        alert("Atenção aos dados! Algum deve estar vazio.")
        console.error("Atenção aos dados! Algum deve estar vazio.")
    } else {
        alert("O endereço não termina em JPG ou PNG!")
        console.error("O endereço não termina em JPG ou PNG!")
    }
}

function verificarFilme(nomeVerif, imagemVerif) {

    for (let filme of filmes) {
        var {nome, imagem} = filme;
        if (nome == nomeVerif || imagem == imagemVerif) {
            return true
        }
    }

}

function FilmesPush(nome, imagem) {
    var filme = {
        nome,
        imagem
    }
    filmes.push(filme)
}

var count = 0;
function writeMovie(listaFilmes) {
    var divFilmes = document.getElementById("listaFilmes");
    divFilmes.innerHTML = "";
    count = 0;
    
    listaFilmes.forEach(e => {
        var {nome, imagem} = e;
        divFilmes.innerHTML += `<div class="divMovie" id="filme${count}">
        <input type="radio" name="selecaoFilme" id="selecaoFilme">
        <img src="${imagem}">
        <h1 class="titleMovie">${nome}</h1></div>`
        count++;
    });
}

function removerFilme() {
    var selecionado = document.getElementsByName("selecaoFilme");
    for (i = 0; i < filmes.length; i++) {
        if (selecionado[i].checked) {
            filmes.splice(i, 1)
            var divFilmes = document.getElementById("listaFilmes");
            var divRemover = document.getElementById(`filme${i}`);
            divFilmes.removeChild(divRemover);
            writeMovie(filmes);
        }
    }
}