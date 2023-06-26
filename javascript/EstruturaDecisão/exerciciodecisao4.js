let letra = prompt(`Digite`).toLowerCase();

let ehLetraDoAlfabeto = letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122;

if (ehLetraDoAlfabeto) {
    let vogal = letra.charCodeAt(0) == 97
                            || letra.charCodeAt(0) == 101
                            || letra.charCodeAt(0) == 105
                            || letra.charCodeAt(0) == 111
                            || letra.charCodeAt(0) == 117;
    if (vogal) {
        alert(`A letra é uma vogal`)
    } else {
        alert(`A letra é uma consoante`)
    }
} else {
    alert(`Não é uma letra do alfabeto`)
}