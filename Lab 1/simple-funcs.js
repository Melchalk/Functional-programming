export function getOnlyEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 == 0);
}

export function getNumbersSquare(numbers) {
    return numbers.map((num) => num ** 2)
}

export function getObjectsWithProperty(objects, property) {
    return objects.filter((obj) => obj.hasOwnProperty(property))
}

export function getNumbersSum(numbers) {
    return numbers.reduce((x, y) => x + y, 0);
}
