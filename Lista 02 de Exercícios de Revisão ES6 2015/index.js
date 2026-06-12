// 1. Filtrar Positivos
const numeros = [-5, 10, -2, 15, -1, 3];

const positivos = numeros.filter(numero => numero > 0);

console.log(positivos);

// 2. Nomes em Maiúsculo
const nomes = ["joão", "maria", "carlos"];

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

console.log(nomesMaiusculos);

// 3. Busca de Usuário
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" },
  { id: 3, nome: "Pedro" },
  { id: 4, nome: "Maria" }
];

const usuario = usuarios.find(user => user.id === 3);

console.log(usuario);

// 4. Cálculo de Imposto
const precos = [100, 200, 300, 400];

const precosComImposto = precos.map(preco => preco * 1.15);

console.log(precosComImposto);

// 5. Contagem de Caracteres
const palavras = ["React", "JavaScript", "HTML", "CSS"];

const tamanhos = palavras.map(palavra => palavra.length);

console.log(tamanhos);

// 6. Remover Duplicados (maiores que 10 e menores que 50)
const numerosFiltro = [5, 12, 25, 60, 45, 8, 30];

const resultado = numerosFiltro.filter(
  numero => numero > 10 && numero < 50
);

console.log(resultado);

// 7. Soma de Carrinho
const carrinho = [99.90, 49.90, 199.90, 29.90];

const somaCarrinho = carrinho.reduce(
  (total, valor) => total + valor,
  0
);

console.log(somaCarrinho);

// 8. Verificar Existência
const cargos = ["User", "Editor", "Admin", "Manager"];

const existeAdmin = cargos.some(
  cargo => cargo === "Admin"
);

console.log(existeAdmin);

// 9. Validação de Lista
const listaNumeros = [10, 20, 30, 40];

const todosPositivos = listaNumeros.every(
  numero => numero > 0
);

console.log(todosPositivos);

// 10. Objeto Curto
const criarProduto = (nome, categoria) => ({
  nome,
  categoria
});

console.log(
  criarProduto("Notebook", "Eletrônicos")
);