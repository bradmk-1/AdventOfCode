const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8')
const parsedInput = data.split('\r\n').map((move: string) => move.split(' '));

//Part One

const potentialMoves = {
    X: {
        alias: 'Rock',
        movePoint: 1,
        A: 3, B: 0, C: 6
    },
    Y: {
        alias: 'Paper',
        movePoint: 2,
        A: 6, B: 3, C: 0
    },
    Z: {
        alias: 'Scissors',
        movePoint: 3,
        A: 0, B: 6, C: 3
    },
};

const partOne = (input: string[]): void => {
    let summedScore = 0;
    for (const move of input) {
        //@ts-ignore
        totalScore += potentialMoves[move[1]].movePoint + potentialMoves[move[1]][move[0]];
    };
    console.log(summedScore);
};

partOne(parsedInput);

//Part Two

const moveTable = {
    A: {
        alias: 'Rock',
        X: 3,
        Y: 4,
        Z: 8,
    },
    B: {
        alias: 'Paper',
        X: 1,
        Y: 5,
        Z: 9,
    },
    C: {
        alias: 'Scissors',
        X: 2,
        Y: 6,
        Z: 7,
    },
} as const;

const partTwo = (input: string[]): void => {
    let summedScore = 0;
    for (const move of input) {
        //@ts-ignore
        summedScore += moveTable[move[0]][move[1]];
    };
    console.log(summedScore);
};

partTwo(parsedInput);


