//escreve uma função que usa dois números e retorna o maior entre eles 
// let idadeUm = 47
// let idadeDois = 55

// function comparaValor(valor1,valor2){
//      if (valor1 > valor2){
//           return valor1
//       } 
//     else if(valor2>valor1){
//       return valor2
//     }
//     else{
//       console.log('Ambos os valores são iguais')
//     }
// };

// console.log(comparaValor(idadeUm,idadeDois))

//fizzbuzz
//valor divisivel por 3 fizz
//valor divisivel por 5 buzz
//divisivel por 3 e 5 fizzbuzz
//não divisivel retorna o mesmo valor
//caso não retorne um valor que é um número ele aponta que não o é
// const resultado = fizzbuzz(15)

// console.log(resultado)

// function fizzbuzz(entrada){
//    if (typeof entrada !== 'number'){
//     return "não é um numero"
//    }
//    if(entrada % 5 === 0 && entrada % 3 === 0){
//     return 'FizzBuzz'
//    }
//    if(entrada % 3 === 0){
//     return 'Fizz'
//    }
//    if(entrada % 5 ===0){
//     return 'Buzz'
//    }
//   return entrada 
// }