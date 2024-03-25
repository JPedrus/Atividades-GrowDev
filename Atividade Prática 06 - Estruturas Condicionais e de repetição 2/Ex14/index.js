let numero = 10
let soma = 0
let mult = 3

while(soma < 500){
    soma += numero
    numero *= mult
    document.write("<br>numero: ", numero, "<br> soma: ", soma ,'<br>')
}

document.write("<br>Ultimo: ", soma)

/*let numero = Number(prompt("Digite um número"))
let soma = 0

while (soma < 500) {
    soma += numero
    numero *= 3
}

console.log(`Valor final: ${soma}`)*/