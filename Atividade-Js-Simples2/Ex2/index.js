let dia = prompt("Digite o número de 1 a 7 da semana").toLowerCase()

switch(dia){
    case '1':
        document.write('Hoje é domingo');
    break;
    case '2':
        document.write('Hoje é segunda-feira');
    break;
    case '3':
        document.write('Hoje é terça-feira');
    break;
    case '4':
        document.write('Hoje é quarta-feira');
    break;
    case '5':
        document.write('Hoje é quinta-feira');
    break;
    case '6':
        document.write('Hoje é sexta-feira');
    break;
    case '7':
        document.write('Hoje é sábado');
    break;
    default:
        document.write('Digite um dia válido!');
}