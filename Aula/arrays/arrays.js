// //Arrays
// //encontrar elementos
// //remover elementos
// //dividir elementos 
// // combinar arrays
// // dividir arrays

// //adicionar elementos:
// const numeros =[1,2,3];

// //inserir no inicio
// numeros.unshift(0);
// console.log(numeros)

// //inserir no meio
// numeros.splice(1,0,'a')
// console.log(numeros)
// //escolhe posição um, o que gostaria de deletar , o que gostaria de inserir no meio


// //inserindo no final
// numeros.push(5);
// console.log(numeros)



// //encontrando um elemento(primitivos)
// const numero = [1,2,3,2,4];
// console.log(numero.indexOf(2));
// // busca dentro do array o elemento e me retorna o indice dele
// console.log(numero.lastIndexOf(2))
// //vai buscar a ultima ocorrencia do valor e retornar a posição
// console.log(numero.indexOf(2) !== -1)
// console.log(numero.includes(2))
// //saber se um elemento existe naquele array

// //encontrar elementos(do tipo referencia)
// const marca = [
//     {id:1, nome : 'a'},
//     {id:2, nome : 'b'}
// ];
// const marcas = marca.find(function(marca){
//      return marca.nome === 'a';
// });
// console.log(marcas)

// //arrow functions
// const marcar = marca.find((marca) => marca.nome === 'a');
// console.log(marcar)
// //remove a palavra function e põe uma seta após 


// //remover elementos de array
// const sequencia =[1,2,3,4,5,6];
// //remover no final
// sequencia.pop()
// console.log(sequencia)
// //remover no inicio
// sequencia.shift();
// console.log(sequencia)
// //remover algo no meio
// sequencia.splice(2,1)
// //coloca a posição e a quantidade de itens
// console.log(sequencia)

// //esvaziando um array
// let number =[1,2,3,4,5,6];
// const outros = number;
// //solução 1
// // number = [];
// // console.log(number)
// // console.log(outros)
// //não apaga se o array está dentro de outra variável
// //usando o let para criação do array é possivel reatribuir os valores e esvaziar como acima

// //solução 2
// // number.length = 0;
// // console.log(number)
// // console.log(outros)
// //dessa maneira zera tudo relacionado ao array em ambas as ocasiões
// //melhor forma, mais performatica

// //solução 3
// // number.splice(0,numeros.length)
// // console.log(number)
// // console.log(outros)

// //solução 4
// // while (number.length > 0) 
// //   number.pop();

// //combinando e cortando arrays
// const primeiro = [1,2,3]
// const segundo = [4,5,6]
// //combinar
// const combinado = primeiro.concat(segundo)
// console.log(combinado)
// //dividir
// const cortado = combinado.slice(1,3)
// //apaga da posição 1 até a 3 - 1
// console.log(cortado)


//combinando arrays
const numeros =[1,2,3,4,5];

const combinado = numeros.join('.')
console.log(combinado)
//nessa maneira adiciona o '.' entre cada item do array

//exemplo 2
const frase = 'Olá mundo, sejam bem-vindos'
resultado = frase.split(' ')
console.log(resultado)
//separa as palavras do string
//usado para criar URLS por exemplo
console.log(resultado.join('-'));
//slug,URL com traços entre as palavras
