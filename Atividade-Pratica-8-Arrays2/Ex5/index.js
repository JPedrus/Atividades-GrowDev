let names = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite um nome:");
    names.push(nome);
}

document.write("Lista de nomes:<br><br>");
for (let i = 0; i < names.length; i++) {
    document.write(names[i], '<br>');
}

document.write("<br><br>Nomes na ordem inversa:<br><br>");
for (let i = names.length - 1; i >= 0; i--) {
    document.write(names[i], '<br>');
};