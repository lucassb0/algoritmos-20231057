const senha = `12345`;
let feedback = `Bloqueado`

for (let tentativa = 0; tentativa < 4; tentativa++) {
    senhaDigitada = prompt(`Digite a sua senha`);
    if (senhaDigitada == senha) {
        feedback = `Autorizado`
        break;
    }
    
    alert(`Senha inválida! Tentativa ${tentativa + 1} de 4`);
}

alert(feedback);