//Manejador de evento boton de limpiar
var boton = document.getElementById("limpiar");
boton.addEventListener("click", limpiar_pantalla );

//Traemos Color desde HTML
var colorcito = document.getElementById("color").value;
document.getElementById("color").addEventListener("change", selectColor);

//Traemos Color desde HTML
var pincelito = document.getElementById("pincel");
pincelito.addEventListener("onchange", selectPincel);
var p = document.getElementById("pincel").value;

function selectPincel(){
console.log(p);
  }

// Ordenes del Teclado
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", dibujarTeclado);


//Entorno de didujo Canvas
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

//Punto de Partida
var x = cuadrito.width/2;
var y = cuadrito.height/2;
dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function limpiar_pantalla(){
  	//borrar todo lo del canvas --->
    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
    window.x = cuadrito.width/2;
    window.y = cuadrito.height/2;
    dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papel);
  }

function selectColor(){
      window.colorcito = document.getElementById("color").value;
  }

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
