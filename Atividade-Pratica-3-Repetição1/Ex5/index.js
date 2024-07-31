let numero = parseInt(prompt("Insira um número inteiro positivo para fazer a contagem"));

let contagem = "";

if (numero <= 0){
    alert("Insira um número válido");
} else {
    for (let i = 0; i <= numero; i++){
        contagem += `${i}, `;
    }

    contagem = contagem.trimEnd();

    document.write("Contagem:", contagem, "FIM");
}