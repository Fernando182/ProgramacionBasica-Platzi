data = [
 "A001-001",
 "A001-002",
 "A001-003",
 "A001-001", // ---> repetido
 "A001-004",
 "A001-005",
 "A001-001", // ---> repetido
]
tmpData = {};

for (n in data) {
 if (!(data[n] in tmpData))
  tmpData[data[n]]=0;
  tmpData[data[n]]+=1;
}

var a=0;
var b=0;

var xEjemplo1 = [0,2,1,4,2,3];
var yEjemplo1 = [0,3,2,3,2,1];

var xEjemplo2 = [4,2,3];
var yEjemplo2 = [3,2,1];

for (var i = 0; i < xEjemplo1.length; i++) {
  for (var j = 0; j < xEjemplo2.length; j++) {
    if (xEjemplo1[i] == xEjemplo2[j] && yEjemplo1[i] == yEjemplo2[j]) {
      document.write (xEjemplo1[i]+" y "+yEjemplo1[i]+" Igual a "+ xEjemplo2[j]+" y "+yEjemplo2[j]+"<br />");
      a++;
    } else {
      document.write (xEjemplo1[i]+" y "+yEjemplo1[i]+" Diff a "+ xEjemplo2[j]+" y "+yEjemplo2[j]+"<br />");
      b++;
    }
  }
}
document.write (a +" Iguales <br />");
document.write (b +" Diff <br />");
