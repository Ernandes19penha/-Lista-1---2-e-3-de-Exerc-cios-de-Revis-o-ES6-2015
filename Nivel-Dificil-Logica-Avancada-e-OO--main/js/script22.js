// 22. Merge de Dados
const ids = [101, 102];
const nomesUsers = ["Alice", "Bob"];
const baseDados = ids.map((id, i) => ({ id, nome: nomesUsers[i] }));
console.log("22. Base Unificada:", baseDados);