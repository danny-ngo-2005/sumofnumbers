"use strict";
function sumForLoop(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        result += input[i];
    }
    return result;
}
function sumWhileLoop(input) {
    let count = 0;
    let result = 0;
    while (count < input.length) {
        result += input[count];
        count += 1;
    }
    return result;
}
function sumRecursion(input, index = 0) {
    if (index >= input.length) {
        return 0;
    }
    return input[index] + sumRecursion(input, index + 1);
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log('Sum using for-loop:', sumForLoop([1, 2, 3, 4]));
console.log('Sum using while-loop:', sumWhileLoop([1, 2, 3, 4]));
console.log('Sum using recursion:', sumRecursion([1, 2, 3, 4]));
console.log('Sum using functional way:', sumTheFunctionalWay([1, 2, 3, 4]));
