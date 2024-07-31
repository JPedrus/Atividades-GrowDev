let soma = 0;
let qtdePositivos = 0;
let qtdeNegativos = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    
    soma += numero;
    
    if (numero > 0) {
        qtdePositivos++;
    } else if (numero < 0) {
        qtdeNegativos++;
    }
}
let media = soma / 10;

let percentualPositivos = (qtdePositivos / 10) * 100;
let percentualNegativos = (qtdeNegativos / 10) * 100;

document.write(`A média aritmética dos valores lidos é: ${media}`);
document.write(`Quantidade de valores positivos: ${qtdePositivos}`);
document.write(`Quantidade de valores negativos: ${qtdeNegativos}`);
document.write(`Percentual de valores positivos: ${percentualPositivos}%`);
document.write(`Percentual de valores negativos: ${percentualNegativos}%`);