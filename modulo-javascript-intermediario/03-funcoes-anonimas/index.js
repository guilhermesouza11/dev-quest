// Porque criamos funções anonimas?


// Essa aqui é uma função criada da sua maneira mais original
function somar(numero1, numero2){
  return numero1 + numero2
}

let resultadoSoma =  somar(12, 5);
console.log(resultadoSoma)

// Essa aqui é uma função anonima, criada a partir de uma variável
let contaSoma = function(num1, num2){
  return num1 + num2;
}

console.log(contaSoma(12, 5));