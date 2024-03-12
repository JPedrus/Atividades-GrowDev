let numeroEleitores = parseInt(prompt("Digite o total de eleitores"));
let numeroVotosBrancos = parseInt(prompt("Número de votos brancos"));
let numeroVotosNulos = parseInt(prompt("Número de votos nulos"));
let numeroVotosValidos = parseInt(prompt("Número de votos Validos"));

let brancos = (numeroVotosBrancos / numeroEleitores) * 100;
let nulos = (numeroVotosNulos / numeroEleitores) * 100;
let validos = (numeroVotosValidos / numeroEleitores) * 100;

document.write(`Total de votos brancos: ${brancos.toFixed(2)}%"<br>"`);
document.write(`Total de votos nulos: ${nulos.toFixed(2)}%"<br>"`);
document.write(`Total de votos validos: ${validos.toFixed(2)}%`)