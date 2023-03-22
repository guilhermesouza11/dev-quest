// Entendendo sobre escopos

/*
  Um exemplo simples de se entender inicialmente sobre escopos é que
  se uma váriavel for criada dentro de um bloco, como por exemplo o bloco abaixo:
  
  if(){
    const variavelExemplo;
  }
  
  Ela poderar ser usada somente dentro daquele escopo, isso acontece no javascript
  pois a acessbilidade das variaveis são limitadas pelo escopo onde elas são
  criadas.

  Um detalhe importante é que os escopos de blocos só delimitam as váriaveis quando 
  elas são Const e Let, já com váriaveis do tipo Var, alguns escopos não craim essa 
  limitação, porém escopos de funções criam.
*/

// Escopo de bloco
// Esses blocos podem ser criados a partir de if, while, for e outros...
  if(){
    const variavelExemplo;
  }

  console.log(variavelExemplo);

// Escopo de bloco de códigos autonomo
// Os autonomos também delimitam um escopo, exemlplo a baixo:
  {
    const mensagem = 'Olá';
  }

  console.log(mensagem);

// Escopo de função
// Uma função javascript define um escopo para váriaveis criadas com let, const e var.
  function falar(){
    var mensagem = 'Olá Mundo!'
  }

  falar()
  console.log(mensagem)
