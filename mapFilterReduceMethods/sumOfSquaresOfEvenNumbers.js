let numbers = [1,2,3,4,5,6,7,8,9,10];
let numbersOfEvenNumbers = numbers.map(el=>el*el).filter(el => el%2 === 0);

const sumOfSquaresOfNumbers = numbersOfEvenNumbers.reduce(
    (previousNumber, currentNumber) => {
        return previousNumber + currentNumber
    }
);

console.log(sumOfSquaresOfNumbers);