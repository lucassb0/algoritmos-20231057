// Solicita ao usuário para inserir a temperatura em Fahrenheit
let temperaturaFahrenheit = prompt("Digite a temperatura em Fahrenheit:");

// Converte a temperatura de string para número
temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

// Calcula a temperatura em Celsius
let temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;

// Exibe o resultado
alert("A temperatura em Celsius é: " + temperaturaCelsius);
