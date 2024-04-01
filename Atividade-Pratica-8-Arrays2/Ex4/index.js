let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numPedido = parseFloat(prompt("Digite um numero para ver se está ou não na lista: "))

let estaNaLista = false

for(let i = 0; i < num.length; i++){
    if(num[i] === numPedido){
        estaNaLista = true
        break;
    }
}
if(estaNaLista == true){
    document.write("Seu numero está na lista!")
}
else{
    document.write("Seu numero não está na lista!")
}