// Solicitar o raio do usuário
let raio = prompt("Digite o raio do círculo:");

// Converter o raio para um número
raio = parseFloat(raio);

// Calcular a área do círculo
let area = Math.PI * raio * raio;

// Mostrar a área do círculo em um alerta
alert("A área do círculo é: " + area);