let nome = parseInt(prompt(`Digite o seu nome`));
let senha = parseInt(prompt(`Digite sua senha`));

for (let i = 0 ; i < 5 ; i++) {
    if (nome == senha) {
        break
        alert(`O nome não pode ser igual a senha`);

    }
    senha = prompt(`Digite sua senha`);
    (nome !== senha);
    alert(`tudo certo`)
}
