//Desenvolva um algoritmo para percorrer um vetor de 15 elementos
//inteiros já preenchido e imprima todos os valores pares.

let vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



for(let i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 === 0){
        document.write('Esse é um numero par: ', vetor[i], '<br>')
    }
}

/*
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (numero of vetor){
    if (numero % 2 === 0){
        document.write(`${numero}<br>`);
    }
}
*/