var estado = 0;             // estado del click

var cuadrito = document.getElementById("area_de_dibujo"); //Entorno de didujo Canvas
var papel = cuadrito.getContext("2d");  // guardar contexto 2D en papel
var x = cuadrito.width/2;    // guardar coordenada en X
var y = cuadrito.height/2;   // guardar coordenada en Y

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

//Manejador de evento boton de limpiar
var boton = document.getElementById("limpiar");
boton.addEventListener("click", limpiar_pantalla );

//Selector de Color
var colorcito = document.getElementById("color").value;
document.getElementById("color").addEventListener("change", selectColor);

//Selector de pincel
var pincelito = document.getElementById("pincel");

// Ordenes del Teclado
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", dibujarTeclado);

dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papel);  // Punto de partida

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                          // Inicia el trazo
  lienzo.strokeStyle = color;                  // Estilo de trazo (color)
  lienzo.lineWidth = window.pincelito.value;   // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);           // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);               // Traza la linea (ubica punto final)
  lienzo.stroke();                             // Dibuja con el estio de trazo
  lienzo.closePath();                          // Cierra el dibujo
}

//Coloca el canvas como en el inicio
function limpiar_pantalla(){
    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
    window.x = cuadrito.width/2;
    window.y = cuadrito.height/2;
    dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papel);
  }

//Cambia el valor de color de la linea
function selectColor(){
      window.colorcito = document.getElementById("color").value;
  }

//Ordenes para dibujar con las flechas
function dibujarTeclado(evento)
{
  var colorcito = window.colorcito;
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}
