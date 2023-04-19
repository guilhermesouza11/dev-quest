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
  valor: 2000
}

//Array que contem objetos
let videoGames = [videoGame, videoGame2]

console.log(videoGames[1].nome);