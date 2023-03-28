// Higher Order Functions = Funções de ordem superior;
// Funções que recebem outras funções como parametro, ou retornam outras funções,
// isso no javascript é chamado de callback.

const calculadoraAnoNascimento = function(idade, mesDeNascimento, imprimir){
  const mesAtual = 3;
  let anoDeNascimento = 2023 - idade;
  if(mesDeNascimento > mesAtual) anoDeNascimento--;
  imprimir(anoDeNascimento);
}

let imprimirAnoDeNascimento = anoDeNascimento => {
  console.log('Seu ano de nascimento é: ' + anoDeNascimento);
}

calculadoraAnoNascimento(25, 3, imprimirAnoDeNascimento)


function multiplicar(multiplicador){ // Nessa linha é criada a função multiplicar que tem como parametro o "multiplicador"
  return function(numero){ // Nessa é retornada uma função anonima com o parametro numero
    return numero * multiplicador; //Retorno da multiplicação entre os parametros numero e o multiplicador
  }
}

let dobrar = multiplicar(2); // Essa variavel recebe como valor a função multiplicar, é nela que será passado o parametro "Multiplicador"
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(2)); // Console irá imprimir o valor que está dentro da função multiplicar, no caso a função anonima, logo a função anonima tem como parametro "Numero"
console.log(triplicar(2));
console.log(quadruplicar(2));

console.log(dobrar); // O console imprime o valor da variável dobrar, logo o valor dessa váriavel é a função anonima que espera o parametro 'numero'