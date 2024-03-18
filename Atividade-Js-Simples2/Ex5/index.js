let altura = parseFloat(prompt("digite a sua altura"));

let peso = parseFloat(prompt("digite o seu peso"));

imc = peso / (altura * altura);

let calculo = imc

if (calculo < 18.5)
    document.write("Você está abaixo da faixa de peso ideal")
else if (calculo >= 18.5 && calculo <= 24.99)
    document.write("Você está dentro da faixa de peso ideal")
else if (calculo > 24.99)
    document.write("Você está acima da faixa de peso ideal")
    