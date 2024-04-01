const primeiroAluno = {
    nome: 'João',
    nota1: 7.8,
    nota2: 8.8,
};
const segundoAluno = {
    nome: 'Andreia',
    nota1: 10,
    nota2: 7.5,
};

let media1 = (primeiroAluno.nota1 + primeiroAluno.nota2) / 2;
let media2 = (segundoAluno.nota1 + segundoAluno.nota2) / 2;
let media3 = (media1 + media2) / 2;

document.write(`As informações do nosso primeiro aluno são:` , '<br>');
document.write('Nome: ',primeiroAluno.nome, '<br>');
document.write('Primeira nota: ',primeiroAluno.nota1, '<br>');
document.write('Segunda nota: ',primeiroAluno.nota2, '<br><br>');

document.write(`As informações do nosso segundo aluno são:`, '<br>');
document.write('Nome: ',segundoAluno.nome, '<br>');
document.write('Primeira nota: ',segundoAluno.nota1, '<br>');
document.write('Segunda nota: ',segundoAluno.nota2, '<br><br>');

document.write(`A média do aluno João é: `, media1, '<br>');
document.write(`A média da aluna Andreia é: `, media2, '<br>');
document.write(`A média da turma é: `, media3, '<br>');