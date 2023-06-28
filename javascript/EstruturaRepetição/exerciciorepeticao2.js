let nomeDeUsuario = parseFloat(prompt(`Digite o seu nome de usuário`));
let senha = parseFloat(prompt(`Digite a sua senha`))
let invalido = isNaN(nomeDeUsuario) || nomeDeUsuario = senha;

for (let i = 0 ; nomeDeUsuario == senha ; i++)
    alert(`não é permitido senha igual a nome de usuário`)
