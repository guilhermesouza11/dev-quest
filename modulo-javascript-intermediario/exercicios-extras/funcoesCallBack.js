// Exercício 1: Soma de Números
// Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.
function soma(num1, num2){
  return num1 + num2;
}

console.log(soma(5, 10));

// Exercício 2: Verificar Número Primo
// Crie uma função chamada isPrimo que recebe um número como parâmetro e retorna verdadeiro se o número for primo e falso caso contrário.

//Primeira condição, um numero primo deve ser maior que 1.
//Segunda condição, 
function isPrimo(){

}


// Crie uma função chamada dobrarNumero que aceita um número e uma função de callback. 
// A função dobrarNumero deve dobrar o número e chamar a função de callback, 
// passando o número dobrado como argumento.

function dobrarNumero (numero, callback){
  let dobro = numero * 2;
  callback(dobro);
}

function imprimirCallBack(resultadoDobro){
  console.log(`Esse aqui é o dobro ${resultadoDobro}`)
}

dobrarNumero(35, imprimirCallBack)

// Exercício 2: Uso de Callback com Tempo Assíncrono

// Crie uma função chamada esperarPorTempo que aceita um tempo (em milissegundos) e uma função de callback.
// A função esperarPorTempo deve usar setTimeout para aguardar o tempo e, em seguida, chamar a função de callback.

let esperarPorTempo = (mensagem, tempo) =>{
  setTimeout(mensagem, tempo);
}

function olaMundo(){
  console.log("Olá mundo, aqui foi feita um callback utilizando o set Time Out!")
}

esperarPorTempo(olaMundo, 5000);

// Exercício 3: Filtrar Números Pares com Callback

// Crie uma função chamada filtrarPares que aceita um array de números e uma função de callback. A função filtrarPares deve usar a função de callback para filtrar apenas os números pares do array e retornar um novo array contendo esses números.

// function filtrarPares(arrNum, filtrandoArr){
//   arrNum % 2 === 0;
//   filtrandoArr(arrNum)
// }



// let filtrar = arr => {
//   const numerosPares = arr.filter(filtrarPares)
//   console.log(numerosPares)
// }

// filtrarPares([0, 1, 2, 3, 4, 5, 6], filtrar)

// Exercício 3: Contagem de Vogais
// Crie uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais na string.

// Exercício 4: Média de Números em um Array
// Crie uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.

// Exercício 5: Reverter uma String
// Crie uma função chamada reverterString que recebe uma string como parâmetro e retorna a string revertida.

// Exercício 6: Encontrar o Maior Número
// Crie uma função chamada encontrarMaior que recebe um array de números como parâmetro e retorna o maior número presente no array.

// Exercício 7: Gerar Sequência Fibonacci
// Crie uma função chamada fibonacci que recebe um número n como parâmetro e retorna um array contendo os primeiros n números da sequência de Fibonacci.

// Exercício 8: Verificar Palíndromo
// Crie uma função chamada isPalindromo que recebe uma string como parâmetro e retorna verdadeiro se a string for um palíndromo (ou seja, lida da mesma forma de trás para frente) e falso caso contrário.

// Exercício 9: Contar Caracteres
// Crie uma função chamada contarCaracteres que recebe uma string e um caractere como parâmetros, e retorna o número de vezes que o caractere aparece na string.

// Exercício 10: Calcular Fatorial
// Crie uma função chamada calcularFatorial que recebe um número como parâmetro e retorna o fatorial desse número.

// Lembre-se de testar suas soluções com diferentes casos de teste para garantir que suas funções estejam funcionando corretamente. E à medida que você se sentir mais confortável com esses conceitos, poderá explorar exercícios mais complexos e desafiantes.