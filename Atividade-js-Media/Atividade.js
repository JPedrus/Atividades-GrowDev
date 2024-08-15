console.log("olá mundo")

console.log('Média')

let nota1 = 90
let nota2 = 50
let nota3 = 35
let peso1 = 2
let peso2 = 3
let peso3 = 5

let soma = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
let media = soma

if (media >= 70) {
    document.write('Aluno aprovado sua média é: ', media)
} else {
    document.write('Aluno reprovado sua média é: ', media)
}
