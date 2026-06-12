// 25. Refatoração de Objeto (Omitindo campos)
const configOriginal = { porta: 80, token: "SECRET", debug: true };
const { token, ...configPublica } = configOriginal;
console.log("25. Config Sem Token:", configPublica);
