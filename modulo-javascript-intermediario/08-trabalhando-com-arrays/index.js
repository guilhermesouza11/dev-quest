let frutas = [
 'Banana',
 'Maçã', 
 'Laranja', 
 'Pêra'
]

let contarFrutas = frutas.length;

// // Exemplo de uso do array for
// for (let i = 0; i < contarFrutas; i++){
//     console.log('Fruta: ' + frutas[i])
// }

// Exemplo de uso do array forEach
frutas.forEach(function(item){
    console.log('Fruta: ' + item)
})

// Metodos do array que iram ajudar na hora de trabalhar com eles:

// Metodo Push, para adicionar elementos no array! 
frutas.push('Manga')
console.log('Metodo Push: ' + frutas + ', ')


// Metodo Pop, para remover o ultimo elemento do array!
// Detalhe importante sobre pop é que não precisa passar nada para ele, ele sempre
// irá remover o ultimo elemento do array
frutas.pop()
console.log('Metodo Pop: ' + frutas)

// Metodo Shift, para remover o primeiro elemento do array!
// Esse metodo irá remover o primeiro elemento do array, mesmo sem passarmos nada
frutas.shift()
console.log('Metodo Shift: ' + frutas)

// Metodo Unshift, para adicionar um elemento na primeira posição do array!
frutas.unshift('Caqui')
console.log('Metodo Unshift: ' + frutas)

// Metodo indexOf, serve para buscar a posição/indice de cada elemento dentro do array!
// Diferente dos outros metodos, o indexOf necessita de uma variavel para conseguir
// apresentar o valor que lhe é atribuido quando declarado.
let posicaoLaranja = frutas.indexOf('Laranja')
console.log('Metodo IndexOf: ' + posicaoLaranja)

console.log(posicaoLaranja)