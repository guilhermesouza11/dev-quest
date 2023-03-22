// Hoisting

// O Içamento eleva para o topo do código, todas as
// declarações de todas as variaveis, porém isso não
// é feito fisicamente.


// Exemplo com váriavel do tipo var:

  console.log(pais);
  var pais = 'Brasil';

// Esse console.log(pais) irá imprimir "undefined", pois o içamento
// entra em ação, elevando apenas a definição da váriavel e não a atribuição.

// Um exemplo simples do que o içamento faz por trás dos panos:

  var pais;
  console.log(pais);
  pais = 'Brasil'


// Exemplo com váriavel do tipo let:

  console.log(pais);
  let pais = 'Brasil';

// O navegador irá apresentar o erro 'Cannot acess "pais" before initialization' pois
// váriaveis declaradas com let, não podem ser lidas ou escritas
// antes de serem totalmente inicializadas, elas são totalmente
// inicializadas onde elas são declaradas no código