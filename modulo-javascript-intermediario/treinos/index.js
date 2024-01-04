const btnComent = document.getElementById("buttonComent");

btnComent.addEventListener('click', () =>{
  let newComent = document.getElementsByName('add-comentario');
  let coment = document.getElementById('paragrafo');

  let textComent = newComent[0].value;
  console.log(textComent)

  if(textComent === ''){
    alert('Comente algo util mlq do caraio!')
  }else{
    coment.innerHTML += `<p>Coment: ${textComent}</p>`
    alert('Obrigado pelo comentário, faça outro!')
  }
  
})