//tipo primitivo
const msg = ' Minha primeira mensagem'
//tipo objeto
const outraMsg = new String('bom dia');



console.log(typeof msg)
//tipo string primitivo
console.log(typeof outraMsg)
//tipo objeto
console.log(outraMsg.length)
//irá contar a quantidade da string como se fosse um objeto

console.log(outraMsg[2])
//informe qual letra está na posição 2 da string

console.log(outraMsg.includes('dia'))
//confirma que existe a palavra dentro da string

console.log(msg.startsWith('Minha'))
//confirma se inicia com a palavra na string

console.log(msg.endsWith('mensagem'))
//se finaliza com
console.log(msg.indexOf('primeira'))
//indice de uma palavra específica dentro da string(posição)
console.log(msg.replace('Minha','Sua'))
//replace, substitui uma palavra na string
console.log(msg.trim())
//tirar espaços excedentes