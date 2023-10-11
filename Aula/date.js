//Dates
const data1 = new Date();
const date2 = new Date('June 06 1999 08:00');
const date3 =  new Date(1999,5,19,8,0)

date3.setFullYear(2030);
//exemplo entre vários de metodos set e get para alterar datas
console.log(data1)
//mostra a hora no momento 
console.log(date2)
//data definida previamente
console.log(date3)
//define data previamente na ordem ano, mes , dia e hora(lembrando sempre janeiro é 0)
