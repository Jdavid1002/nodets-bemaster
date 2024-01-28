// Ejercicio 3: Pensamiento lógico
// Escribe una función que tome un número entero como entrada y devuelva un array con todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].

function getOddNumbers(upTo: number): number[] {
  const oddNumbers: number[] = [];
  for (let i = 1; i <= upTo; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}

const inputNumber: number = 9;
const oddNumbersUpToInput: number[] = getOddNumbers(inputNumber);
console.log(oddNumbersUpToInput); // Output: [1, 3, 5, 7, 9]
