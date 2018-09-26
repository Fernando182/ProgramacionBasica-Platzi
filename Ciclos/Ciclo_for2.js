var xComparar = [0];
var yComparar = [0];

    for(var i=1; i<5; i++)
    {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      xComparar[i] = x * 100;
      yComparar[i] = y * 100;
    }

var xEjemplo2 = [0,400,300,200];
var yEjemplo2 = [0,400,0,400];

for (var i = 0; i < xComparar.length; i++) {
  for (var j = 0; j < xEjemplo2.length; j++) {
    if (xComparar[i] == xEjemplo2[j] && yComparar[i] == yEjemplo2[j]) {
      document.write (xComparar[i]+" y "+yComparar[i]+" Igual a "+ xEjemplo2[j]+" y "+yEjemplo2[j]+"<br />");

      if (xEjemplo2[j] < 400) {
        xEjemplo2[j]=xEjemplo2[j]+100;
        j--;
      } else {
              if (yEjemplo2[j] < 400) {
                yEjemplo2[j]=yEjemplo2[j]+100;
                j--;
              } else {
                yEjemplo2[j]=yEjemplo2[j]-100;
                j--;
              }
            }

    } else {
      document.write (xComparar[i]+" y "+yComparar[i]+" Diff a "+ xEjemplo2[j]+" y "+yEjemplo2[j]+"<br />");
    }
  }
}

function aleatorio(min, maxi)
{
  var resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
