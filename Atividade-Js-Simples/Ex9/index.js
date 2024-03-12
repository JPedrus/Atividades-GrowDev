let maças = parseInt(prompt("Quantas maças foram compradas"));
let menosDeDoze = 0.3;
let maisDeDoze = 0.25;

if(maças < 12){
    alert("O valor é R$0.30: " + "R$" + (maças * menosDeDoze))
} else {
    alert("O valor é R$0.25: " + "R$" + (maças * maisDeDoze))
}