// 24. Sistema de Notas
const alunos = [{ n: "A", notas: [8, 9] }, { n: "B", notas: [5, 6] }];
const medias = alunos.map(({ n, notas }) => ({
nome: n,
media: notas.reduce((a, b) => a + b) / notas.length
}));
console.log("24. Médias:", medias);
