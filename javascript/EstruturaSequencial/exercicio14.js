// Solicita ao usuário para inserir o peso de peixes
let peso = prompt("Digite o peso de peixes em quilos:");

// Converte o peso de string para número
peso = parseFloat(peso);

// Verifica se houve excesso de peso
let excesso = peso - 50;
excesso = excesso > 0 ? excesso : 0;

// Calcula o valor da multa
let multa = excesso * 4;

// Exibe os resultados usando alert
alert("Peso de peixes: " + peso.toFixed(2) + " kg\n" +
      "Excesso de peso: " + excesso.toFixed(2) + " kg\n" +
      "Multa a pagar: R$ " + multa.toFixed(2));
