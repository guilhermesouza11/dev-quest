// Entendendo sobre escopos

/*
  Um exemplo simples de se entender inicialmente sobre escopos é que
  se uma váriavel for criada dentro de um bloco 
  
  if(){
    const variavelExemplo;
  }
  
  Ela poderar ser usada somente dentro daquele escopo, isso acontece no javascript
  pois a acessbilidade das variaveis são limitadas pelo escopo onde elas são
  criadas.
*/


console.log(mensagem);
const mensagem = 'Olá';