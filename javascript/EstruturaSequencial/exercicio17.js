// Solicita ao usuário o tamanho em metros quadrados da área a ser pintada
let area = prompt("Digite o tamanho da área a ser pintada em metros quadrados:");

// Converte a área de string para número
area = parseFloat(area);

// Calcula a quantidade de litros de tinta necessária considerando 10% de folga
let litrosNecessarios = Math.ceil(area / 6 * 1.1);

// Calcula a quantidade de latas de 18 litros necessárias
let latasNecessarias = Math.ceil(litrosNecessarios / 18);

// Calcula a quantidade de galões de 3,6 litros necessários
let galoesNecessarios = Math.ceil(litrosNecessarios / 3.6);

// Calcula o preço total ao comprar apenas latas de 18 litros
let precoLatas = latasNecessarias * 80;

// Calcula o preço total ao comprar apenas galões de 3,6 litros
let precoGaloes = galoesNecessarios * 25;

// Encontra a melhor combinação de latas e galões para minimizar o desperdício
let latasMelhorComb = Math.floor(litrosNecessarios / 18);
let galoesMelhorComb = Math.ceil((litrosNecessarios - (latasMelhorComb * 18)) / 3.6);
let precoMelhorComb = (latasMelhorComb * 80) + (galoesMelhorComb * 25);

// Exibe os resultados usando alert
alert("Situação 1: Comprar apenas latas de 18 litros\n" +
      "Quantidade de latas de 18 litros: " + latasNecessarias +
      "\nPreço total: R$ " + precoLatas.toFixed(2) +
      "\n\nSituação 2: Comprar apenas galões de 3,6 litros\n" +
      "Quantidade de galões de 3,6 litros: " + galoesNecessarios +
      "\nPreço total: R$ " + precoGaloes.toFixed(2) +
      "\n\nSituação 3: Misturar latas e galões\n" +
      "Quantidade de latas de 18 litros: " + latasMelhorComb +
      "\nQuantidade de galões de 3,6 litros: " + galoesMelhorComb +
      "\nPreço total: R$ " + precoMelhorComb.toFixed(2));
