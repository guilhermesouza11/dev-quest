let botaoDeSoma = document.getElementById('somaProdutos')

// Criando objetos de jogos
let jogo1 = {
  nome: 'Final Fantasy',
  valor: 59.90,
  maioresDe: 14
}

let jogo2 = {
  nome: 'Fallout',
  valor: 89.90,
  maioresDe: 18
}

// Esse Objeto possui algumas props e possuem também uma lista, essa lista contém
// alguns outros objetos
let videoGame1 = {
  nome: 'Xbox',
  valor: 3000,
  jogos: [jogo1, jogo2]
}

// Esse Objeto possui algumas props e também possui uma prop 'jogos', cujo seu 
// valor é uma lista, dentro dessa lista está sendo criado alguns outros objetos,
// sendo suas props 'nome'
let videoGame2 = {
  nome: 'Playstation',
  valor: 4000,
  jogos: [
    { nome: 'Call Of Duty' },
    { nome: 'Kill Zone' }
  ]
}

let jogo3 = {
  nome: 'Fifa',
  valor: 120.90,
  maioresDe: 12
}

// Metodo push(), para adicionar o objeto dentro da nossa lista depois dela ter sido criada
videoGame1.jogos.push(jogo3);
videoGame2.jogos.push(jogo3);

// Esse forEach está verificando a lista de jogos que possui dentro do objeto "videoGame1";
videoGame1.jogos.forEach((i) => {
  console.log("Jogos de xbox: " + i.nome)
})

// Esse forEach está verificando a lista de jogos que possui dentro do objeto "videoGame2";
videoGame2.jogos.forEach((i) => {
  console.log("Jogos de Playstation: " + i.nome)
})

console.table(videoGame1);
console.table(videoGame2);

//Objeto dentro de outro Objeto
const cliente = {
  nome: 'Guilherme',
  ultimosPedidos: {
    tipo: 'Vestimentas',
      produtos: [
        {
          idProduto: '123abc',
          produto: 'Camisa',
          valorProd: 100.00
        },
        {
          idProduto: '456def',
          produto: 'Calça',
          valorProd: 100.00
        },
        {
          idProduto: '789ghi',
          produto: 'Oculos de Sol',
          valorProd: 50
        }
      ],
      valorTotal: () =>{
        botaoDeSoma.addEventListener('click', () => {
          let soma = 0;
          cliente.ultimosPedidos.produtos.map(prod => {
            soma += prod.valorProd;
          })
          console.log(soma);
        })
      },
    }
}

cliente.ultimosPedidos.valorTotal();

// Exibindo no console o valor de produto3
// console.log('Esse cliente comprou o produto: ' + 
// cliente.ultimosPedidos.produtos[2].idProduto, 
// cliente.ultimosPedidos.produtos[2].produto)




