//Um objeto sempre havera suas propriedades, por exemplo o objeto abaixo 'tenis',
//possui suas propriedades, cor, tamamho, emEstoque;
let tenis = {
    // chave: valor
    cor: 'branco',
    tamanho: 39,
    emEstoque: true
}

console.log(tenis)

// Aqui está sendo adicionado novas propriedades dentro do objeto 'tenis'.
tenis.valor = 270
tenis.nome = 'Nike Air force'

// Exemplo abaixo é de como pode ser acessado as propriedades.
if(tenis.emEstoque == true){
    console.log("Esse item está em estoque")
}else{
    console.log("Esse tenis está em falta")
}