let num1 = parseFloat(prompt(`Digite um número`));
let num2 = parseFloat(prompt(`Digite outro número`))

if (num1 > num2) {
    alert(num1 + " é maior que " + num2);
} else if (num2 > num1) {
    alert(num2 + " é maior que " + num1);
} else {
    alert("Os números são iguais.");
} 