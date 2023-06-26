// Solicita ao usuário o tamanho em metros quadrados da área a ser pintada
let area = prompt("Digite o tamanho da área a ser pintada em metros quadrados:");

// Converte a área de string para número
area = parseFloat(area);

// Calcula a quantidade de litros de tinta necessária (arredondando para cima)
let litrosNecessarios = Math.ceil(area / 3);

// Calcula a quantidade de latas de tinta necessárias
let latasNecessarias = Math.ceil(litrosNecessarios / 18);

// Calcula o preço total das latas de tinta
let precoTotal = latasNecessarias * 80;

// Exibe os resultados usando alert
alert("Quantidade de latas de tinta necessárias: " + latasNecessarias +
      "\nPreço total: R$ " + precoTotal.toFixed(2));
