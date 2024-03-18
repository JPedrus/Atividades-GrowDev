let numero1 = parseFloat(prompt('Digite um número'));
let numero2 = parseFloat(prompt('Digite outro número'));
let operaçao = prompt('Qual será a operação? Soma, subtração, multiplicação ou divisão?').toLowerCase();

let soma = numero1 + numero2;
let subtraçao = numero1 - numero2;
let multiplicaçao = numero1 * numero2;
let divisao = numero1 / numero2;

switch(operaçao){
    case 'soma':
        document.write(`O resultado da conta é ${soma}`)
    break;
    case 'subtração':
        document.write(`O resultado da conta é ${subtraçao}`)
    break;
    case 'multiplicação':
        document.write(`O resultado da conta é ${multiplicaçao}`)
    break;
    case 'divisão':
        document.write(`O resultado da conta é ${divisao}`)
    break;
}