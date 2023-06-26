// Solicita ao usuário o tamanho do arquivo em MB
let tamanhoArquivo = prompt("Digite o tamanho do arquivo para download em MB:");

// Converte o tamanho do arquivo de string para número
tamanhoArquivo = parseFloat(tamanhoArquivo);

// Solicita ao usuário a velocidade da internet em Mbps
let velocidadeInternet = prompt("Digite a velocidade do link de internet em Mbps:");

// Converte a velocidade da internet de string para número
velocidadeInternet = parseFloat(velocidadeInternet);

// Calcula o tempo aproximado de download em minutos
let tempoDownload = tamanhoArquivo / (velocidadeInternet / 8) / 60;

// Exibe o tempo aproximado de download usando alert
alert("O tempo aproximado de download é de " + tempoDownload.toFixed(2) + " minutos.");
