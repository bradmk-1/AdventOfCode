import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8')
const parsedInput = data.split('\r\n').map((bag: string) => bag.split(' '));

//Part One

const partOne = (input: string[][]): void => {
    const mask = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letterCollection = 0;

    for (const bag of input) {
        const firstHalf = bag[0].slice(0, bag[0].length / 2);
        const secondHalf = bag[0].slice(bag[0].length / 2);
        letterCollection += mask.indexOf(firstHalf.split('').find((item) => secondHalf.includes(item))!) + 1;
    };
    console.log(letterCollection);
};

partOne(parsedInput);

//Part 2

const partTwo = (input: string[][]): void => {
    const mask = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let badgeCollection = 0;

    for (let i = 0; i < input.length; i += 3) {
        badgeCollection += mask.indexOf(input[i][0].split('').find((item) => input[i + 1][0].includes(item) && input[i + 2][0].includes(item))!) + 1;
    };
    console.log(badgeCollection);
};

partTwo(parsedInput);

