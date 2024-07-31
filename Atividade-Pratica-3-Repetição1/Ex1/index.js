let menorAltura = Infinity;
let maiorAltura = -Infinity;

for (let i = 1; i <= 3; i++) {
    let altura = parseFloat(prompt(`Digite a altura ${i}: `));
    
    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}

document.write(`A menor altura do grupo é: ${menorAltura} m <br><br>`);
document.write(`A maior altura do grupo é: ${maiorAltura} m`);