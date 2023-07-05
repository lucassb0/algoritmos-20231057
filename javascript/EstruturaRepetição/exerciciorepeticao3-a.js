/* letra a */

let nome = prompt(`Digite um nome com mais de 3 caracteres`);

while (nome.length <= 3) {
    nome = prompt("O nome deve conter mais de 3 caracteres. Digite novamente seu nome:");
}

alert(`Válido`);

