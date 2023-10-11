//Operadores Lógicos , Aritiméticos , atribuição, comparação , Bitwise

//Aritmeticos 
// let salarioMensal = 100;
// //pode-se usar +, - ,*, / , **

// function horaExtra(salario){
//       return salario + 115
// }
// console.log(horaExtra(salarioMensal))


//atribuição

// let salarioMensal = 100;
// salarioMensal += salarioMensal;
// console.log(salarioMensal)

// //Igualdade
// //estrita
// console.log(1 === 1);
// //compara valor e tipo de dado
// console.log('1' === 1);
// //Igualdade Solta
// console.log(1 == 1);
// //compara apenas o valor, conversão para que os tipos fiquem iguais 

//operador ternario
//Tem um cliente

// //se o cliente tiver mais que 100 pontos, cliente premium, caso contrario comum 
// let pontos = 100;
// let tipo = pontos >= 100 ? 'Premium' : 'Comum'
// //variavel tipo é igual a lógica que se a variavel pontos for maior ou igual a 100 então "?" será cliente premium
// //senão ":" será comum
// console.log(tipo)

//operadores lógicos 
//and(&&) , or(||) , not(!)
//and(&&) , os dois precisam retornar true
//or(||), um dos dois precisam retornar true
//not(!), se não for é true

//comparações não-booleanas
//truthy or falsy

//falsy
// undefined
// null
// ' '
// NaN - Not a number 

//truthy
//qualquer outro

// let corPersonalizada = 'Vermelho';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

//na comparação or(||) é necessário que se encontre apenas um valor truthy para que pare a comparação
