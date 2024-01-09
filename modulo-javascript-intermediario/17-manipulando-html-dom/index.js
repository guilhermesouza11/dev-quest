function adicionarComentario(){
  let novoComentario = document.getElementsByName("novo-comentario");
  let textoDigitado = novoComentario[0].value;
  let campoComentarios = document.getElementById('campo-comentarios');
  campoComentarios.innerHTML += `<p>Novo Comentário: ${textoDigitado}</p>`
}