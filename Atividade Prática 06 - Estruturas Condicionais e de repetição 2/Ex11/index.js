let turno = prompt("Digite o tuno que você estuda! M - Matutino, V - Vespertino, N - Noturno").toUpperCase();

switch(turno){
    case 'M':
        document.write(`Bom dia`);
    break;
    case 'V':
        document.write(`Boa tarde`);
    break;
    case 'N':
        document.write(`Boa noite`);
    break;
    default:
        document.write("Digite uma letra que seja M, V ou N");
    }