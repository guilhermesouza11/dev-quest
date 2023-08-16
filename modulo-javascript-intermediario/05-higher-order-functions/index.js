
//Verificação para saber se é maior de idade
let calculoMaioridade = imprimirMaioridade => {
  let anoNascimento = prompt("Informe aqui a seu ano de nascimento:")
  imprimirMaioridade(anoNascimento);
}

let calculoDeDataERegra = anoNascimento =>{
  let maiorDeIdade = 2023 - anoNascimento;
  if(maiorDeIdade >= 18){
    console.log("Você é maior de idade!");
  }else{
    console.log("Você não é maior de idade, saia do site agora!")
  }
}

calculoMaioridade(calculoDeDataERegra)


