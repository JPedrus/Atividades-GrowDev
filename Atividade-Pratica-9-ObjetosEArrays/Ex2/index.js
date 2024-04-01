let notebook = {
    Processador: 'i7',
    Memória: '16GB',
    Preço: 5000,
    hd: '1TB',
    ssd: '256GB',
};

document.write(`Comprei um notebook com essas especificações:`, '<br>');
document.write('Processador: ',notebook.Processador, '<br>');
document.write('Memória: ',notebook.Memória, '<br>');
document.write('Preço: R$ ',notebook.Preço, '<br>');
document.write('HD: ',notebook.hd, '<br>');
document.write('SSD: ',notebook.ssd, '<br>');