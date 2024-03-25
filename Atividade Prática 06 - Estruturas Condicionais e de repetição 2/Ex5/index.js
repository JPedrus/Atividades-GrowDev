let quantidade = Number(prompt("Digite quantas vezes você quer que repita o processo"))

for(numero = 0; numero < quantidade; numero++){

    if(numero % 2 === 0){
        document.write(`${numero} <br>`)
    }
    
}