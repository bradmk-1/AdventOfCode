import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8');
const parsedInput = data.split('\r\n').map(instruction => instruction.split(' '));

const stackMap = [
    ['R', 'C', 'H'],
    ['F', 'S', 'L', 'H', 'J', 'B'],
    ['Q', 'T', 'J', 'H', 'D', 'M', 'R'],
    ['J', 'B', 'Z', 'H', 'R', 'G', 'S'],
    ['B', 'C', 'D', 'T', 'Z', 'F', 'P', 'R'],
    ['G', 'C', 'H', 'T'],
    ['L', 'W', 'P', 'B', 'Z', 'V', 'N', 'S'],
    ['C', 'G', 'Q', 'J', 'R'],
    ['S', 'F', 'P', 'H', 'R', 'T', 'D', 'L'],
]

//Part One

const partOne = (input: string[][], stackMap: string[][]) => {
    for (const instruction of input) {
        const toStack = stackMap[Number(instruction[5]) - 1];
        const fromStack = stackMap[Number(instruction[3]) - 1];
        const amount = Number(instruction[1]);
        toStack.unshift(...fromStack.slice(0, amount).reverse());
        fromStack.splice(0, amount);
    };
    console.log(stackMap.map(crate => crate[0]))
};

partOne(parsedInput, stackMap);

//Part Two

const partTwo = (input: string[][], stackMap: string[][]) => {
    for (const instruction of input) {
        const toStack = stackMap[Number(instruction[5]) - 1];
        const fromStack = stackMap[Number(instruction[3]) - 1];
        const amount = Number(instruction[1]);
        toStack.unshift(...fromStack.slice(0, amount));
        fromStack.splice(0, amount);
    };
    console.log(stackMap.map(crate => crate[0]))
};

partTwo(parsedInput, stackMap);


