let valorHora = parseFloat(prompt("Quanto você ganha por hora?"));
let horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou no mês?"));

let salarioBruto = valorHora * horasTrabalhadas;

let ir = salarioBruto * 0.11;
let inss = salarioBruto * 0.08;
let sindicato = salarioBruto * 0.05;
let descontos = ir + inss + sindicato;
let salarioLiquido = salarioBruto - descontos;

alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}
IR (11%): R$ ${ir.toFixed(2)}
INSS (8%): R$ ${inss.toFixed(2)}
Sindicato (5%): R$ ${sindicato.toFixed(2)}
Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);