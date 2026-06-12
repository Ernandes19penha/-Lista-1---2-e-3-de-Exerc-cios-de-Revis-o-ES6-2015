// 30. Agregador de Classes
class Relatorio {
    gerar(users) {
        return users.map(({ nome, cargo }) => `LOG: ${nome.toUpperCase()} - ${cargo}`);
    }
}
const r = new Relatorio();
console.log("30. Relatório da Classe:", r.gerar([{ nome: "vini", cargo: "dev" }]));
