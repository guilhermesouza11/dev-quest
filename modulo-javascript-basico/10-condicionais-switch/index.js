// switch(parametro){
//  case valor1:
//    <bloco de declaracao>
//  case valor2:
//    <bloco de declaracao>
//}

let nomeFilme = 'Vingadores';

switch(nomeFilme){
  case 'Vingadores':
    console.log('É o filme dos Vingadores')
    break
  case 'Batman vs Superman':
    console.log('É p filme do Batman vs Superman')
    break
  case 'Senhor dos Aneis':
    console.log('É o filme do Senhor dos Aneis')
    break
  default:
    console.log('É outro filme')
    break
}

//Trabalhando Switch com inteiros

let avaliacao = 1;

switch(avaliacao){
  case 1:
  case 2:
    console.log('Filme ruim')
    break
  case 3:
  case 4:
    console.log('Filme bom')
    break
  case 5:
    console.log('Filme excelente')
    break
  default:
    console.log('Nota inválida')
    break
}
















