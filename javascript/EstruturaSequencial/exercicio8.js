let valorHora = parseFloat(prompt("Quanto você ganha por hora?"));
let horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou no mês?"));

let salarioTotal = valorHora * horasTrabalhadas;

alert(`Seu salário total no mês é: R$ ${salarioTotal.toFixed(2)}`);
