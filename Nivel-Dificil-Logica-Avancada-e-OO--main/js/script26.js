// 26. Calculadora de Estoque
const estoque = [{ item: "Mouse", preco: 50, qtd: 10 }];
const valorizado = estoque.map(i => ({ ...i, total: i.preco * i.qtd }));
console.log("26. Valor Total Estocado:", valorizado);