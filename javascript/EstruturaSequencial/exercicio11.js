let num1 = parseInt(prompt(`Digite o primeiro numero inteiro`));

let num2 = parseInt(prompt(`Digite o segundo numero inteiro`));

let num3 = parseFloat(prompt(`Digite um número real`));

let produto = (num1 * 2) * (num2 / 2);

let soma = (num1 * 3) + num3;

let cubo = Math.pow(num3, 3);

alert(`O produto do dobro do primeiro com metade do segundo é ${produto}.
A soma do triplo do primeiro com o terceiro é ${soma}.
O terceiro elevado ao cubo é ${cubo}.`);

