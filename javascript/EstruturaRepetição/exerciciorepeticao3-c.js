/* letra c */

let salario = prompt(`Digite o seu salário`);

while (salario <= 0) {
    salario = prompt(`salário inválido, digite novamente`)
};

alert(`seu salário é: ${salario}`);