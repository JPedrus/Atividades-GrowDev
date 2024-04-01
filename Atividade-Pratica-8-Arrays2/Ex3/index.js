let value = 10000;

let valuePerfeito = [];

for (let i = 1; i <= value; i++){
    
    let numero = 0;

    for (let j = 1; j < i; j++ ){
        if(i % j === 0){
            numero += j;
        }
    }

    if (numero === i){
        valuePerfeito.push(i)
    }
}

document.write("Números perfeitos até o limite de: ", value, ' são: ', ": ");
document.write(valuePerfeito, ', ');