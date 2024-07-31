//Uma pizzaria oferece três tamanhos de pizza:
//Pequena: R$20,00
//Média: R$30,00
//Grande: R$40,00
//Se o cliente pedir uma pizza pequena e refrigerante, o total será R$25,00..
//Escreva um programa que leia o tamanho da pizza (pequena, média ou grande) e 
//a resposta do cliente sobre o refrigerante (sim ou não). O programa deve imprimir 
//o valor total a ser pago pelo cliente.

let pizza = prompt('Qual o tamanho da sua pizza? P - Pequena, M - Média, G - Grande').toLowerCase();
let refrigerante = confirm('Você vai querer refrigerante?');

if(pizza === "p" && refrigerante == true){
    console.log("O valor será R$25,00");
} else if(pizza === "p" && refrigerante == false){
    console.log("O valor será R$20,00");
} else if(pizza === "m" && refrigerante == true){
    console.log("O valor será R$35,00");
} else if(pizza === "m" && refrigerante == false){
    console.log("O valor será R$30,00");
} else if(pizza === "g" && refrigerante == true){
    console.log("O valor será R$45,00");
} else if(pizza === "g" && refrigerante == false){
    console.log("O valor será R$40,00");
} else {
    console.log("Digite P, M ou G");
}