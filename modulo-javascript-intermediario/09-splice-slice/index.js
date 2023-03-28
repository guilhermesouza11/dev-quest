let frutas = ['Banana', 'Maçã', 'Morango', 'Manga', 'Mamão']

// O slice, básicamente cria um outro arrya, porem com os recortes de cada elemento
// que for passado para ele.

// Metodo Slice. Na váriavel a baixo foi definido que o valor dela que será um array, o slice está 
// com a função de obter os elementos começando do primeiro e terminando no ultimo.
// O Valor dessa extração será ['Maçã', 'Morango']
// Uma observação importante é que mesmo com a utilização do slice o array original
// continua com os mesmos valores de antes, eles não são removidos.
let frutasExtraidas = frutas.slice(1, 3)
console.log(frutasExtraidas)
console.log(frutas)


// Metodo Splice. Na variável a baixo terá uma array como valores, esse
// array será composto por elementos removidos do array original 'frutas'.
// É imporante lembrarmos que o array pode tanto remover, como adicionar elementos na
// váriavel original 'frutas'. A remoção pode ser feita indicando os indices e a adição
// pode ser realizada indicando os elementos desejados como o exemplo a baixo.
let frutasRemovidas = frutas.splice(1, 4, 'Goiaba', 'Abacaxi', 'Abacate')
console.log(frutasRemovidas)
console.log(frutas)