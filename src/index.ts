/**
  • Almacene en un arreglo de dimensión N, números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
 */
let dimensionArreglo : number = Number(prompt(`Ingrese la dimensión del arreglo: `));
let arreglo : number[] = new Array (dimensionArreglo);
let contadorPositivo: number = 0;
let contadorNegativo: number = 0;
let contadorCero: number = 0;

for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = Number(prompt(`Indique el nro que va en la posición ${i}: `));
  if (arreglo[i] === 0){
    contadorCero ++;
  } else if (arreglo[i] < 0){
      contadorNegativo ++;
  } else if (arreglo[i] > 0){
      contadorPositivo ++;
  }
} // Hice la lógica del conteo de positivos, negativos y cero dentro del mismo for de
// ingreso de datos para no repetir otra vez el mismo for para recorrer el arreglo
//pero entiendo que se podría hacer en otro separado.

console.log(`Ustede ingresó ${contadorCero} numeros cero`);
console.log(`Ustede ingresó ${contadorPositivo} numeros positivos`);
console.log(`Ustede ingresó ${contadorNegativo} numeros negativos`);

