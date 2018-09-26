// Genera un número aleatorio ente un rago de enteros
function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo +1 ) + minimo );
    return numero;
}

var piedra=0;
var papel=1;
var tijera=2;

var opciones = ["Piedra","Papel","Tijera"];

// Definimos el resultado de cada combinación en el orden "piedra", "papel" y "tijera"
var opcionPiedra = ["Empate!","Perdiste!","Ganaste!"];
var opcionPapel = ["Ganaste!","Empate!","Perdiste!"];
var opcionTijera = ["Perdiste!","Ganaste!","Empate!"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPriedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == 0)
    {
        alert(opcionPiedra[opcionMaquina]);
    }
else if(opcionUsuario == 1)
    {
        alert(opcionPapel[opcionMaquina]);
    }
else if(opcionUsuario == 2)
    {
        alert(opcionTijera[opcionMaquina]);
    }
else
    {
        alert("Opción no valida!");
    }
