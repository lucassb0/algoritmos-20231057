/* letra b */

let idade = prompt(`Digite a sua idade:`);

while (idade <= 0 || idade >= 150) {
    idade = prompt(`Digite sua idade novamente:`);
}

alert(`Sua idade é ${idade}`);

