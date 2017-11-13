<<<<<<< HEAD
//Declaracion de Varibles
    var peso = parseFloat(prompt("Cual es tu peso en la tierra?"));
    var planeta = parseInt(prompt("Elige un planeta \n1 Mercurio \n2 Venus \n3 Marte \n4 Jupiter \n5 Saturno \n6 Urano \n7 Neptuno"));

    var g_mercurio = 3.7;
    var g_venus = 8.87;
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var g_saturno = 10.44;
    var g_urano = 8.7;
    var g_neptuno = 11.15;

    var peso_final;
    var nombre;

//Blouqe De codigo
switch(planeta) {
    case 1:
        peso_final = peso * g_mercurio / g_tierra;
        nombre = "Mercurio";
        break;
    case 2:
        peso_final = peso * g_venus / g_tierra;
        nombre = "Venus";
        break;
    case 3:
        peso_final = peso * g_marte / g_tierra;
        nombre = "Marte";
        break;
    case 4:
        peso_final = peso * g_jupiter / g_tierra;
        nombre = "Jupiter";
        break;
    case 5:
        peso_final = peso * g_saturno / g_tierra;
        nombre = "Saturno";
        break;
    case 6:
        peso_final = peso * g_urano / g_tierra;
        nombre = "Urano";
        break;
    case 7:
        peso_final = peso * g_neptuno / g_tierra;
        nombre = "Neptuno";
        break;
    default:
        peso_final = 1000000;
        nombre = "Krypton";
}

// Valor del peso a imp
  peso_final = (peso_final.toFixed(2));
  document.write("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos</strong>");
=======
//Declaracion de Varibles
    var peso = parseFloat(prompt("Cual es tu peso en la tierra?"));
    var planeta = parseInt(prompt("Elige un planeta \n1 Mercurio \n2 Venus \n3 Marte \n4 Jupiter \n5 Saturno \n6 Urano \n7 Neptuno"));

    var g_mercurio = 3.7;
    var g_venus = 8.87;
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var g_saturno = 10.44;
    var g_urano = 8.7;
    var g_neptuno = 11.15;

    var peso_final;
    var nombre;

//Blouqe De codigo
switch(planeta) {
    case 1:
        peso_final = peso * g_mercurio / g_tierra;
        nombre = "Mercurio";
        break;
    case 2:
        peso_final = peso * g_venus / g_tierra;
        nombre = "Venus";
        break;
    case 3:
        peso_final = peso * g_marte / g_tierra;
        nombre = "Marte";
        break;
    case 4:
        peso_final = peso * g_jupiter / g_tierra;
        nombre = "Jupiter";
        break;
    case 5:
        peso_final = peso * g_saturno / g_tierra;
        nombre = "Saturno";
        break;
    case 6:
        peso_final = peso * g_urano / g_tierra;
        nombre = "Urano";
        break;
    case 7:
        peso_final = peso * g_neptuno / g_tierra;
        nombre = "Neptuno";
        break;
    default:
        peso_final = 1000000;
        nombre = "Krypton";
}

// Valor del peso a imp
  peso_final = (peso_final.toFixed(2));
  document.write("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos</strong>");
>>>>>>> Dibujos con Canvas
