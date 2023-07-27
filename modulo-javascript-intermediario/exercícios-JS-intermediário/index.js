const controls = document.querySelectorAll('.control'); //Selecionando todos os elementos que tem a classe '.controls'
let currentItem = 0; //Criando a variável 'currentItem' com o valor 0, ela irá ser a nossa imagem principal do carrocel
const items = document.querySelectorAll('.item'); //Seleciona todos os elementos que tem a classe '.item'
const maxItems = items.length; //Criação da váriavel 'maxItems', seu valor é devinido pela contagem que 'length' faz da váriavel 'items'

controls.forEach(control => { //Cria o forEach para passar dentro da váriavel 'controls' capitando todos as classes  '.control'
    control.addEventListener('click', () => { //Adiciona um evento de clique para cada classe '.control'

        const isLeft = control.classList.contains('left'); //Verifica se cada elemento com a classe '.control' possui a classe '.left', se existir retorna true;
        
        if(isLeft){ //Se 'isLeft' for igual a true, é executado o seguinte código
            currentItem -= 1; //Será subtraído 1 da váriavel 'currentItem'
        }else{ //Porém, se 'isLeft' for igual a false, executa o codigo abaixo
            currentItem += 1; //Será somado mais 1;
        }

        if(currentItem >= maxItems){
            currentItem = 3;
        }

        //  CONTINUAR ISSO AQUI DEPOIS
        for (let i = 1; i < currentItem; i++) {
            if(i === currentItem){
                controls[1].classList.add('disable-button')
            }
        }

        console.log(currentItem)

        if(currentItem < 0){
            currentItem = maxItems;
        }

        items.forEach(item => 
            item.classList.remove('current-item')
        );

        items[currentItem].scrollIntoView({
            inline: 'center',
            behavior: 'smooth'
        })


        console.log(controls)
    })
})

