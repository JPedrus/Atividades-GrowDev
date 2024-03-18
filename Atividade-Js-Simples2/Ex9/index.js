let velocidade = prompt("Digite a velocidade do carro");

let permitido = 80;
let multa = 5;

if (velocidade > permitido){
    multa = (velocidade - permitido) * 5;
    document.write(`Você foi multado em R$${multa}!`)
}   
else if (velocidade <= 80)
    document.write("Você está na velocidade permitida!")
