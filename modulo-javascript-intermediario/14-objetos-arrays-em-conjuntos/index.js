let jogo1 = {
  nome: 'Final Fantasy',

}

let jogo2 = {
  nome: 'Fallout'
}

// Objeto com lista recebendo objetos de fora
let videoGame1 = {
  nome: 'Xbox',
  valor: 3000,
  jogos: [jogo1, jogo2]
}

//Objeto com lista criando objetos sendo criada dentro da lista
let videoGame2 = {
  nome: 'Playstation',
  valor: 4000,
  jogos: [
    { nome: 'Call Of Duty' },
    { nome: 'Kill Zone' }
  ]
}

let jogo3 = {
  nome: 'Fifa'
}

// Metodo push(), para adicionar o objeto dentro da nossa lista depois dela ter sido criada
videoGame2.jogos.push(jogo3);

console.log(videoGame2)

//Objeto dentro de outro Objeto
let cliente = {
    nome: 'Guilherme',
    ultimosPedidos: {
    produto: 'Vestimentas',
    valorTotal: 250.00,
    produtos: [
      {
        produto1: 'Camisa',
        produto2: 'Calça',
        produto3: 'Oculos de Sol'
      }
    ]
  }
}

//Exibindo no console o valor de produto3
console.log(cliente.ultimosPedidos.produtos[0].produto3)




