const a1 = { 1: "a", 2: "b" };
const a2 = { 3: "c", 4: "d" };

const a3 = { a1, a2 };
console.log(" Before a3 :",a3);
const a4 = { ...a1, ...a2}; //shallow copy
console.log(" Before a4 :",a4);
a1[1] = "new";

console.log(" After a3 :",a3);
console.log(" After a4 :",a4);

