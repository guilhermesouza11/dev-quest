let usuario = {
    nome: 'Guilherme',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido com sucesso!')
    }
}

usuario.excluir()