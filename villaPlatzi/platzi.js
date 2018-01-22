var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 0;
var yLobo = 0;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo(e)
{
	var movimiento = 64;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

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
  cantidad: 1
};
var lobo =
{
	url: "lobo.png",
	cargaOK: false,
  cantidad: 1
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

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargaLobo);

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
function cargaLobo()
{
	lobo.cargaOK = true;
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
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      xVaca[v] = x * 100;
      yVaca[v] = y * 100;
      papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var c=0; c < cerdo.cantidad; c++)
    {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      xCerdo[c] = x * 100;
      yCerdo[c] = y * 100;
      papel.drawImage(cerdo.imagen, xCerdo[c], yCerdo[c]);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p=0; p < pollo.cantidad; p++)
    {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      xPollo[p] = x * 100;
      yPollo[p] = y * 100;
      papel.drawImage(pollo.imagen, xPollo[p], yPollo[p]);
    }
    if (lobo.cargaOK) {
      papel.drawImage(lobo.imagen, xLobo, yLobo);
    }
  }
  dibujarCuadricula();
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

function dibujarCuadricula(){
  for (var i = 0; i < 5; i++) {
    var px=i*100;
    dibujarLinea("black", 0,px, 500,px);
    }
  for (var i = 5; i >= 0; i--) {
    var py=i*100;
    dibujarLinea("black", py,0, py,500);
    }
}
