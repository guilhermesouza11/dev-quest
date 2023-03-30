'use strict'

// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Guilherme';

// function saudar(){
//     console.log('this no contexto da funcao', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Guilherme',
//     saudar: function(){
//         console.log('this no contexto do metodo', this)
//         console.log('this.nome no contexto do metodo', this.nome)
//     },
//     idade: 25,
//     altura: 1.70,
//     estadoCivil: 'solteiro',
// }

// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida.temperatura)

comida.cozinhar(100)

console.log(comida.temperatura)

