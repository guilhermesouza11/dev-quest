'use strict'
// Array, utlizado para manipular lista de valores, podendo ser strigns, numeros e também
// lista de vários objetos
let frutas = ['uva', 'banana', 'melão']

// Objetos, são utilizados para agrupar informações, caracteristicas de itens e produtos 
// aproximando nosso código do mundo real.
let videoGame = {
  nome: 'Xbox',
  valor: 3000
}

let videoGame2 = {
  nome: 'Playstation',
  valor: 2000,
  compare: () =>{
    if(this.valor != videoGame.valor){
      console.log('Os Valores são diferentes!')
    }else{
      console.log('Os valores são iguais')
    }
  }
}

console.log('Valor do xbox: ' + videoGame.valor + ' Valor do playstation: ' + videoGame2.valor)
videoGame2.compare();

//Array que contem objetos
let videoGames = [videoGame, videoGame2]

console.log(videoGames[1].nome);