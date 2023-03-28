let frutas = [
 'Banana',
 'Maçã', 
 'Laranja', 
 'Pêra'
]

let contarFrutas = frutas.length;

// Exemplo de uso do array for
// for (let i = 0; i < contarFrutas; i++){
//     console.log('Fruta: ' + frutas[i])
// }

// Exemplo de uso do array forEach
// frutas.forEach(function(item, i, array){
//     console.log('Fruta: ' + item, i, array)
// })


// Metodo Push, para adicionar elementos no array! 
frutas.push('Manga')
console.log(frutas)


// Metodo Pop, para remover o ultimo elemento do array!
frutas.pop()
console.log(frutas)

// Metodo Shift, para remover o primeiro elemento do array!
frutas.shift()
console.log(frutas)

// Metodo Unshift, para adicionar um elemento na primeira posição do array!
frutas.unshift('Caqui')
console.log(frutas)

// Metodo indexOf, serve para buscar a posição/indice de cada elemento dentro do array!
// Diferente dos outros metodos, o indexOf necessita de uma variavel para poder conseguir
// apresentar o valor que lhe é atribuido quando declarado.
let posicaoLaranja = frutas.indexOf('Laranja')
console.log(posicaoLaranja)