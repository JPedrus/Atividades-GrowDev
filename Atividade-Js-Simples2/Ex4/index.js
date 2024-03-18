let custo1 = parseFloat(prompt('Informe o valor de custo de fábrica:'));

let distribuidor = 28
let impostos = 45

let ValorDistribuidor = (custo1 * distribuidor) / 100

let ValorImposto = (custo1 * impostos) / 100

let CustoConsumidor = ValorDistribuidor + ValorImposto + custo1

document.write("O valor do carro ao consumidor é: ", CustoConsumidor);