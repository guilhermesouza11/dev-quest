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


function dobrar(numero){
  return numero * 2
}

console.log(dobrar(2))