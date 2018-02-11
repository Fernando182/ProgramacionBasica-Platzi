var xComparar=new Array();
var yComparar=new Array();
var a,b;

var items = [
  [0,0],
  [0,100],
  [0,200],
  [0,300],
  [0,400],
  [100,0],
  [100,100],
  [100,200],
  [100,300],
  [100,400],
  [200,0],
  [200,100],
  [200,200],
  [200,300],
  [200,400],
  [300,0],
  [300,100],
  [300,200],
  [300,300],
  [300,400],
  [400,0],
  [400,100],
  [400,200],
  [400,300],
  [400,400]
];


for (i=0; i<5; i++) {
      a = 100*i;
      for (j=0; j<5; j++){
          b = 100*j;
          xComparar[i]=a;
          yComparar[j]=b;
      }
}

function mantenerPosicionV()
{
	//Agregar posiscion xLobo y yLobo
	addComparar(0,0,0);
	init=xComparar.length;
	if(vaca.cargaOK)
	{
		// Verificar repetidos
		for(var i=0; i<vaca.cantidad; i++) {
			var x = aleatorio(0, 4);
			var y = aleatorio(0, 4);
			for (var j = 0; j < init; j++) {
			  if (xComparar[j] == xVaca[i] && yComparar[j] == yVaca[i]) {
			    console.log("Vacas");
			  } else {
					xVaca[i] = x * 100;
					yVaca[i] = y * 100;
					addComparar(i+init,xVaca[i],yVaca[i]);
			  }
			}
		}
	}
}
