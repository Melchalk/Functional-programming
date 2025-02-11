export function getMultiples(numbers: number[], num: number): number[] {
     return numbers.filter(n => n % num == 0);
}

export function getCommonString(strings: number[], separator: string): string {
    return strings.join(separator);
}

export function getSortedObjects<T>(objects: T[], property: keyof T): T[] {
    let filteredObjects = objects.filter(obj => obj[property] !== undefined);

    return filteredObjects.sort((x, y) => compareObjects(x[property], y[property]));
}

function compareObjects<P>(first: P, second: P): number {
    if (first == second) return 0;
    else if (first > second) return 1;
    else return -1;
}

function executeFunctionAndLog(func: Function): void {
    console.log(`Выполнение функции ${func}`)

    func();
}