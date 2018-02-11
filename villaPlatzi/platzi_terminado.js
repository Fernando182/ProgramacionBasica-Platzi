var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

var xComparar = new Array();
var yComparar = new Array();

var xLobo = 0;
var yLobo = 0;

function moverLobo(e)
{
	var movimiento = 100;
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
			if (xLobo <= 0) {
				dibujar(xLobo, yLobo);
			} else {
				xLobo = xLobo - movimiento;
				dibujar(xLobo, yLobo);
			}
		break;
		case teclas.UP:
			if (yLobo <= 0) {
				dibujar(xLobo, yLobo);
			} else {
				yLobo = yLobo - movimiento;
				dibujar(xLobo, yLobo);
			}
		break;
		case teclas.RIGHT:
			if (xLobo >= 400) {
				dibujar(xLobo, yLobo);
			} else {
				xLobo = xLobo + movimiento;
				dibujar(xLobo, yLobo);
			}
		break;
		case teclas.DOWN:
			if (yLobo >= 400) {
				dibujar(xLobo, yLobo);
			} else {
				yLobo = yLobo + movimiento;
				dibujar(xLobo, yLobo);
			}
		break;
	}
}

var fondo = {
  url: "tile.png",
  cargaOK: false,
  cantidad: 1
};
var fondo_gana = {
  url: "tile_ganaste.png",
  cargaOK: false,
  cantidad: 1
};
var fondo_pierde = {
  url: "tile_perdiste.png",
  cargaOK: false,
  cantidad: 1
};
var vaca = {
  url: "vaca.png",
  cargaOK: false,
  cantidad: aleatorio(1,4)
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  cantidad: aleatorio(1, 5)
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

fondo_gana.imagen = new Image();
fondo_gana.imagen.src = fondo_gana.url;
fondo_gana.imagen.addEventListener("load", cargarFondogana);

fondo_pierde.imagen = new Image();
fondo_pierde.imagen.src = fondo_pierde.url;
fondo_pierde.imagen.addEventListener("load", cargarFondopierde);

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
function cargarFondogana()
{
  fondo_gana.cargaOK = true;
  dibujar();
}
function cargarFondopierde()
{
  fondo_pierde.cargaOK = true;
  dibujar();
}
function cargaLobo()
{
	lobo.cargaOK = true;
	dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  mantenerPosicionV();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  mantenerPosicionC();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  mantenerPosicionP();
}
//Cargar datos en el arreglo Comparar
function addComparar(iPosiscion,xValor,yValor)
{
	xComparar[iPosiscion] = xValor;
	yComparar[iPosiscion] = yValor;
}
//Crear posiscion y compara para las Vacas
function mantenerPosicionV()
{
	//Agregar posiscion xLobo y yLobo
	addComparar(0,0,0);
	init=xComparar.length;
	if(vaca.cargaOK)
	{
		for(var i=0; i<vaca.cantidad; i++)
		{
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      xVaca[i] = x * 100;
      yVaca[i] = y * 100;
			// Verificar repetidos
			for (var j = 0; j < init; j++) {
			  if (xComparar[j] == xVaca[i] && yComparar[j] == yVaca[i]) {
					i=i-1;
			    console.log("Vacas");
			  } else {
					addComparar(i+init,xVaca[i],yVaca[i]);
			  }
			}
		}
	}
}
//Crear posiscion y compara para los Cerdos
function mantenerPosicionC()
{
	init=xComparar.length;
	if(cerdo.cargaOK)
	{
		for(var i=0; i<cerdo.cantidad; i++)
		{
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
			xCerdo[i] = x * 100;
      yCerdo[i] = y * 100;
			// Verificar repetidos
			for (var j = 0; j < init; j++) {
				if (xComparar[j] == xCerdo[i] && yComparar[j] == yCerdo[i]) {
					i=i-1;
					console.log("Cerdos");
				} else {
					addComparar(i+init,xCerdo[i],yCerdo[i]);
				}
			}
		}
	}
}
//Crear posiscion y compara para los Pollos y dibujar
function mantenerPosicionP()
{
	init=xComparar.length;
	if(pollo.cargaOK)
	{
		for(var i=0; i<pollo.cantidad; i++)
		{
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      xPollo[i] = x * 100;
      yPollo[i] = y * 100;
			// Verificar repetidos
			for (var j = 0; j < init; j++) {
				if (xComparar[j] == xPollo[i] && yComparar[j] == yPollo[i]) {
					i=i-1;
					console.log("pollo");
				} else {
					addComparar(i+init,xVaca[i],yVaca[i]);
				}
			}
		}
	}
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
      papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var c=0; c < cerdo.cantidad; c++)
    {
      papel.drawImage(cerdo.imagen, xCerdo[c], yCerdo[c]);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p=0; p < pollo.cantidad; p++)
    {
      papel.drawImage(pollo.imagen, xPollo[p], yPollo[p]);
    }
    if (lobo.cargaOK) {
      papel.drawImage(lobo.imagen, xLobo, yLobo);
    }
  }
  dibujarCuadricula();
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
