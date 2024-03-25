let numeros = [38, 78, 17, 32, 20]

let soma = 0

for(let i of numeros){
    //No for of o i assume o valor do array e não o indice
    soma += i
}

document.write('Essa é a soma do array: ', soma)