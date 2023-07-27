// Use Strict Proibe a mescla entre os escopos, assim não faz com que o 'this' ultrapasse os escopos de funções e metodos
'use strict' 

// This pode estar em escopos globais, funções ou até mesmo em escopos de metodos
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
    temperatura: 0,
}

// É criado o metodo 'cozinhar' para o objeto 'comida'
// Esse metodo tem como função criar uma  propriedade dentro de 'comida', cujo o
// valor da propriedade será 
comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida.temperatura)

comida.cozinhar(100)

console.log(comida.temperatura)
