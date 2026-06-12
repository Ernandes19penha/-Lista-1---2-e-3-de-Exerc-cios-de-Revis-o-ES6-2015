// 27. Alias no Map
const info = [{ id_user: 1 }, { id_user: 2 }].map(({ id_user: id }) => id);
console.log("27. IDs Renomeados no Map:", info);
