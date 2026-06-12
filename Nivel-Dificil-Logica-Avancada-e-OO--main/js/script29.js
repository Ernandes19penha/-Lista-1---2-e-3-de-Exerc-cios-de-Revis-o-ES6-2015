// 29. Tratamento de Incompletos
const contatos = [{ nome: "Vini", tel: "123" }, { nome: "Ana" }];
const normalizado = contatos.map(({ tel = "N/A", ...r }) => ({ ...r, tel }));
console.log("29. Dados Normalizados:");
console.table(normalizado);
