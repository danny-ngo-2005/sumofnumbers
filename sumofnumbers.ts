function sumForLoop(input: number[]): number {
  let result: number = 0;
  for (let i = 0; i < input.length; i++) {
    result += input[i];
  }
  return result;
}

function sumWhileLoop(input: number[]): number {
  let count: number = 0;
  let result: number = 0;
  while (count < input.length) {
    result += input[count];
    count += 1;
  }
  return result;
}

function sumRecursion(input: number[], index: number = 0): number {
  if (index >= input.length) {
    return 0;
  }
  return input[index] + sumRecursion(input, index + 1);
}

function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log('Sum using for-loop:', sumForLoop([1, 2, 3, 4]));
console.log('Sum using while-loop:', sumWhileLoop([1, 2, 3, 4]));
console.log('Sum using recursion:', sumRecursion([1, 2, 3, 4]));
console.log('Sum using functional way:', sumTheFunctionalWay([1, 2, 3, 4]));
