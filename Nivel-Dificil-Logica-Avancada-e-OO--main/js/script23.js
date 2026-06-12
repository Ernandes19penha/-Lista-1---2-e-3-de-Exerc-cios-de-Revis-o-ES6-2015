// 23. Chave Dinâmica
const campo = "email";
const { [campo]: valorCampo } = { email: "teste@teste.com", id: 1 };
console.log("23. Chave Dinâmica:", valorCampo);
