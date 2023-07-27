const botao = document.getElementById('thisButton');

// const usuario = {
//     nome: 'Guilherme',
//     excluir: function(){
//         console.log('O usuário, ' + this.nome + ' foi excluido')
//     }
// }

// usuario.excluir()

const usuario2 = {
    nome: 'Guilherme',
    excluir: () => {
        botao.addEventListener('click', function(){
            console.log('O usuário, ' + usuario2.nome + ' foi excluido com sucesso!')
        })
    }
}

usuario2.excluir();


// console.log('Guilherme')