/* Estamos desenvolvendo o maior E-commerce da América Latina. Para isso, 
estamos desenvolvendo um sistema que cadastra nossos produtos e serviços , 
onde devemos solicitar a pessoa que está cadastrando os produtos , as seguintes 
informações : 
 - Id (identificador único) - Número inteiro;
- Nome do Produto ; 
- Preço do Produto (não pode ser negativo e nem menor que 20 reais) ; 
- Quantidade em Estoque (deve ser maior que 10 e par) ; 
Crie um programa que solicite a pessoa usuária cada uma das i
Caso a pessoa usuária não passe as informações, retorne as seguintes 
mensagens em tela : 
- ID => " Identificador não encontrado, passe um número válido " 
- Nome do Produto => "Insira um nome de produto válido "
- Preço do Produto => "Insira um preço de produto válido "
- Quantidade em Estoque => "Insira uma quantidade de produto válida para o 
estoque */

let id = parseInt(prompt('Digite o id'));
let nomeDoProduto = prompt('Digite o nome do produto')
let preco = parseFloat(prompt('Digite o preço do produto'))
let qntEmEstoque = parseInt(prompt('Digite a quantidade em estoque'))

if(id !== isNaN(id)){
    alert("Digite um numero válido inteiro")
} else if (nomeDoProduto !== String){
    alert('Digite um nome sem números ou caracteres')
} else if(preco > 20 || preco >= 0){
    alert('Digite um valor acima de 20')
} else if(qntEmEstoque < 10 && qntEmEstoque % 2 !== 0){
    alert('Digite uma quantidade mair que 10')
}

document.write(`o id do produto é: ${id}`, `<br><br>`);
document.write(`O nome do produto é ${nomeDoProduto}`, `<br><br>`);
document.write(`o preço do produto é R$ ${preco}`, `<br><br>`);
document.write(`A quantidade em estoque é ${qntEmEstoque}`);

