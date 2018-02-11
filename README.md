# ProgramacionBasica-Platzi

- (Peso) Calculo de peso en planetas
- (Dom) Pruebas de DOM
- (Dibujo) Dibujos con Canvas
- (Flechas) Mover con flechas del teclado
- (VillaPlatzi) Funciones matematicas JS
- (Modulo) Programa FizzBuzz
- (Pakiman) Pakidex Array
- (Cajero)

# Villa Platzi
  - Comparar Posiciones
    - Llegar a la Gallina
- Ciclo de fin y (gano/Perdio)
# Paint
- Tutorial de pain con Js

(ADDED, UPDATED, FIXED, DELETED)

	for (var i = 0; i < xVaca.length; i++) {
		if (xComparar[cp] == xVaca[i] && yComparar[cp] == yVaca[i]) {
				if (yVaca[i] > 0 && yVaca[i] < 400  ) {
					yVaca[i]=yVaca[i]+100;
					i--;
				}
				else {
					if (yVaca[i]=0) {
						yVaca[i]=yVaca[i]+100;
						i--;
					}
					else {
						yVaca[i]=yVaca[i]-100;
						i--;
					}
				}
		}
		else {
			xComparar[cp] = xVaca[i];
			yComparar[cp] = yVaca[i];
			cp++;
		}
	}
}
