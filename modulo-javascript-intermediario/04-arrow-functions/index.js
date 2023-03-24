// Essa é uma Arrow function padrão, criada a partir de uma váriavel.
let resultadoDaSoma = (numero1, numero2) => {
  return numero1 + numero2;
}

console.log(resultadoDaSoma(25, 5))

// Essa é uma Arrow function, que com apenas um parametro, teve ser tamanho simplificado.
// Foram removidos os parenteses do unico parametro.
let incentivarQuester = nomeQuester => {
  console.log("Parabens" + nomeQuester + "! Você conseguiu!")
}

incentivarQuester('Guilherme')

// Essa aqui, continua sendo uma Arrow Function, ainda mais reduzida. 
// Nessa função, foi removido o Return e as chaves que envolviram a lógica do código a ser
// execultado.
let somaDeTres = (num1, num2, num3) => num1 + num2 + num3
console.log(somaDeTres(5, 5, 20))