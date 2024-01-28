// Ejercicio 2: Nomenclatura
// Te presentamos el siguiente fragmento de código:

function f(x : any, y : any, z : any) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

// Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor su función.

function calculateSinusoidalValue(base: number, multiplier: number, angle: number): number {
  const sumOfValues: number = base + multiplier;
  const productOfValues: number = sumOfValues * angle;
  const sineResult: number = Math.sin(productOfValues);
  return sineResult;
}