//função interessante por um verbo + substantivo

//exemplo função sem parameto:


// let corSite = "Azul"

// function resetaCor(){
//     corSite = null;
// }; 

// console.log(corSite)
// resetaCor();
// console.log(corSite)

//ex função parametros

//  let corSite = "Azul"

//  function resetaCor(cor, tonalidade){
//      corSite = cor + tonalidade;

//  }; 

//  console.log(corSite)
//  resetaCor('Verde','claro')
//  console.log(corSite)


//exemplos funções 
//realiza uma tarefa e não devolve nada:
// function dizerNome(){
//      console.log(dizerNome);

// };
// dizerNome();
// // faz cauculo ou operação e retorna algo
// function multiplicarPorDois(numero){
//      return numero * 2
// }
// console.log(multiplicarPorDois(5));

//factory functions (função de fábrica)

// const celular = {
//    marcaCelular : 'ASUS',
//    tamanhoTela : {
//       vertical: 155,
//       horizontal: 75
//    },
//    capacidadeBateria : 5000,
//    ligar : function (){
//      console.log('Fazendo ligação...')
//    }
// }

//  // é necessário cadastrar varios celulares, encapsula informação dentro de um método que cria objeto
// function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
//   return  {
//     marcaCelular,
//     tamanhoTela,
//     capacidadeBateria,
//     ligar(){
//       console.log('Fazendo ligação...')
//     }
//  }
//  
// }

// console.log(criarCelular('Samsung A03',5.5,5000));

//constructor functions


//Pascal case , UmDoisTresQuatro
// function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria,
//     this.ligar = function(){
//       console.log('Efetuando ligação');
//     }
// }

// const celular = new Celular('ASUS',5.5,5000)
// console.log(celular)