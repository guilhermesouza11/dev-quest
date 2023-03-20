/*
  function nomeDafuncao(){
    <bloco de execução>
  }

  nomeDaFuncao()
*/

/*
  function nomeDafuncao(parametro1, parametro2){
    <bloco de execução>
  }

  nomeDaFuncao(parametro1, parametro2)
*/


function incentivarQuester(nomeQuester = 'Quester'){
  alert('Muito bem ' + nomeQuester + '! Você chegou ao JS, continue assim!')
}

incentivarQuester('Guilherme');

//Função com parametro
function soma(numero1, numero2){
  return numero1 + numero2
}

let resultadoDaSoma = soma(5, 10);
console.log(resultadoDaSoma) //15

resultadoDaSoma = soma(resultadoDaSoma, 20);
console.log(resultadoDaSoma) //35






