var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false,
  cantidad: aleatorio(1, 1)
};
var vaca = {
  url: "vaca.png",
  cargaOK: false,
  cantidad: aleatorio(1, 5)
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  cantidad: aleatorio(1, 6)
};
var pollo = {
  url: "pollo.png",
  cargaOK: false,
  cantidad: aleatorio(1, 1)
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    for(var v=0; v < vaca.cantidad; v++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 100;
      var y = y * 100;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var c=0; c < cerdo.cantidad; c++)
    {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 10);
      var x = x * 100;
      var y = y * 100;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p=0; p < pollo.cantidad; p++)
    {
      var x = aleatorio(0, 2);
      var y = aleatorio(0, 7);
      var x = x * 100;
      var y = y * 100;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  dibujarLinea("black", 0,100, 500,100);
  dibujarLinea("black", 0,200, 500,200);
  dibujarLinea("black", 0,300, 500,300);
  dibujarLinea("black", 0,400, 500,400);

  dibujarLinea("black", 100,0, 100,500);
  dibujarLinea("black", 200,0, 200,500);
  dibujarLinea("black", 300,0, 300,500);
  dibujarLinea("black", 400,0, 400,500);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

function aleatorio(min, maxi)
{
  var resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
