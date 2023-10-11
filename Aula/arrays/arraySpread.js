//forma de concatenar, fazer cópias e clonagens de arrays no js

const primeiro = [1,2,3]
const segundo = [4,5,6]


//const combinado = primeiro.concat(segundo)
//const cortado = combinado.slice()

//operador spread
const combinado = [...primeiro,'a',...segundo,3];
console.log(combinado)
//concatena os arrays , permitindo modificações

const clonado = [...combinado];
console.log(clonado)
//clona arrays