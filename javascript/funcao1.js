function bemVindo() {
    return `Bem vindo`;
}

function pegaNome() {
    let nome = document.getElementById(`nome`).value;
    let resposta = `${bemVindo()}, ${nome}!`;
    document.getElementById(`saida`).innerHTML = resposta;
    document.getElementById(`saida`).style.backgroundColor = `f00`;
}

function media (numero1, numero2) {
    let media = (numero1 + numero2) / 2;
    return media.toFixed(2);
}

function situacao(media) {
    if (media >= 70) {
        return `Aprovado`;
    }
    return `Reprovado`
}

function calcular () {
    let nota1 = parseInt(document.getElementById(`nota1`).value);
    let nota1 = parseInt(document.getElementById(`nota2`).value);
    let mediareal = mediareal(nota1, nota2);
    document.getElementById(`media`).value = media(nota1, nota2);
    document.getElementById(`situacao`).value =situacao();

}
