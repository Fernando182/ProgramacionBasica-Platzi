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

var ejemplo1 = [1,2,3,4,6,1,5];
var ejemplo2 = [3,2,4,5,6,1,5];

for (n in ejemplo1) {
  if (ejemplo1[n] == ejemplo2[n]) {
    document.write (ejemplo1[n]+" Igual "+ ejemplo2[n]+"<br />");
  } else {
    document.write (ejemplo1[n]+" Diff "+ ejemplo2[n]+ "<br />");
  }
}
