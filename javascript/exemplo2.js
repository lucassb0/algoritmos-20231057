let nota = parseInt(prompt(`Informe sua nota`));

let entradaInvalida = isNaN(nota) || nota < 0 || nota > 10
let aprovado = nota >= 7;
let reprovado = nota < 3;


if (entradaInvalida) {
    alert(`Entrada inválida \n Digite novamente`)
} else if (aprovado) {
    alert(`Parabéns!`);
} else if (reprovado) {
    alert(`Infeliz`)
} else {
    alert(`Quase lá!`)
    let notaRecuperacao = parseInt(prompt(`Informe a sua nota de recuperação`));
    let mediaRecuperacao = (nota + recuperacao) / 2;
    aprovado = mediaRecuperacao >=5;
    if (aprovado) {
        alert(`Parabéns! Você está aprovado`);
    } else {
        alert(`Infeliz! Está reprovado`);
    }
}

