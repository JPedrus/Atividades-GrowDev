// const aluno = {
//     nome: 'João Pedro',
//     idade: 26,
//     curso: 'Desenvolvedor Web'
// }

// console.log(aluno.nome)

// aluno.nota = 9.8

// console.log(aluno)

// aluno.curso = 'Dados'

// console.log(aluno)

// if (aluno.idade > 18) {
//     console.log('O aluno é maior de 18 anos')
// } else {
//     console.log('O aluno é menor de 18 anos')
// }


// Para colocar os mesmos dados em outro objeto, mas que não compartilham a mesma referencia

// const livro = {
//     titulo: 'Clean Code',
//     autor: 'Robert C. Martin',
//     paginas: 500,
//     idioma: 'English',
//     estaDisponivel: true
// }

// const livro2 = {}

// for (const key in livro){
//     livro2[key] = livro[key]
// }

// console.log(livro)
// console.log(livro2)

// const carro = []

// const carro1 = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2022,
//     cor: 'Preto'
// }

// const carro2 = {
//     marca: 'Honda',
//     modelo: 'Civic',
//     ano: 2021,
//     cor: 'Prata'
// }

// const carro3 = {
//     marca: 'Fiat',
//     modelo: 'Marea',
//     ano: 1998,
//     cor: 'Branco'
// }

// carro.push(carro1, carro2, carro3)

// // for (let i = 0; i < carro.length; i++) {
// //     console.log(`Marca: ${carro[i].marca}, Modelo: ${carro[i].modelo}, Ano: ${carro[i].ano}, Cor: ${carro[i].cor}`)
// // }

// for ( const carro of carro) {
//     console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}, Cor: ${carro.cor}`)
// }

const pessoas = []

let continuar = true

while (continuar) {
    const nome = prompt('Digite o nome da pessoa')
    const idade = prompt('Digite a idade da pessoa')
    const cidade = prompt('Digite a cidade da pessoa')

    pessoas.push({
        nome,
        idade,
        cidade
    })

    continuar = confirm('Deseja cadastrar outra pessoa?')
}

console.log(pessoas)