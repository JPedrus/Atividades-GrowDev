let nomeAluno = prompt("Digite o nome do aluno");
let nota1 = parseFloat(prompt("insira a primeira nota"));
let nota2 = parseFloat(prompt("insira a segunda nota"));
let nota3 = parseFloat(prompt("insira a terceira nota"));
let media = (nota1 + nota2 + nota3) / 3;

document.write(`O aluno ${nomeAluno} ficou com media ${media.toFixed(2)}`)