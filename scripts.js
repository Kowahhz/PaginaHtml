
// Obtén una referencia a los botones de aumento de fuente y contraste
var aumentarFuenteBtn = document.getElementById('aumentarFuenteBtn');
var contrasteBtn = document.getElementById('contrasteBtn');

// Agrega un controlador de eventos para el botón de aumento de fuente
aumentarFuenteBtn.addEventListener('click', function() {
  aumentarTamanioFuente();
});

// Agrega un controlador de eventos para el botón de contraste
contrasteBtn.addEventListener('click', function() {
  alternarContraste();
});

// Función para aumentar el tamaño de la fuente
function aumentarTamanioFuente() {
  // Obtén el tamaño actual de la fuente del cuerpo de la página
  var estiloActual = window.getComputedStyle(document.body);
  var tamañoActual = parseInt(estiloActual.fontSize);

  // Aumenta el tamaño de la fuente en un valor específico (puedes ajustarlo según tus necesidades)
  var nuevoTamanio = tamañoActual + 2;
  document.body.style.fontSize = nuevoTamanio + 'px';
}

// Función para alternar el contraste
function alternarContraste() {
  // Agrega o elimina una clase del cuerpo de la página para cambiar los estilos de contraste
  document.body.classList.toggle('alto-contraste');
}