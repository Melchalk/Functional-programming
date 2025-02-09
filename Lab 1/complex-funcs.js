import { getNumbersSquare, getObjectsWithProperty, getNumbersSum, getOnlyEvenNumbers} from './simple-funcs.js';

export function executeFunctionForArray(func, array) {
    return array.map((item) => func(item));
}

export function getSumSquaresOfEven(numbers) {
    let even = getOnlyEvenNumbers(numbers);
    let squares = getNumbersSquare(even);

    return getNumbersSum(squares);
}

export function getAverageOfBigOnes(objects, minNum) {
    let numbers = objects.filter((obj) => !isNaN(obj));

    let correntNumbers = numbers.filter((num) => num > minNum);

    return correntNumbers.length > 0 ? getNumbersSum(numbers) / correntNumbers.length : 0;
}