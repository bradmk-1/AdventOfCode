import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8');
const parsedInput = data.split('\r\n');

//Part One

const partOne = (input: string[]): void => {
    let totalOverlaps = 0;
    for (const range of input) {
        const firstPairRange = range.split(',')[0].split('-');
        const secondPairRange = range.split(',')[1].split('-');

        const firstPair: number[] = [];
        for (let i = Number(firstPairRange[0]); i <= Number(firstPairRange[1]); i++) {
            firstPair.push(i);
        }

        const secondPair: number[] = [];
        for (let i = Number(secondPairRange[0]); i <= Number(secondPairRange[1]); i++) {
            secondPair.push(i);
        }

        if (firstPair.every(id => secondPair.includes(id)) || secondPair.every(id => firstPair.includes(id))) {
            totalOverlaps++;
        }
    };
    console.log(totalOverlaps);
};

partOne(parsedInput);

//Part Two

const partTwo = (input: string[]): void => {
    let totalOverlaps = 0;
    for (const range of input) {
        const firstPairRange = range.split(',')[0].split('-');
        const secondPairRange = range.split(',')[1].split('-');

        const firstPair: number[] = [];
        for (let i = Number(firstPairRange[0]); i <= Number(firstPairRange[1]); i++) {
            firstPair.push(i);
        }

        const secondPair: number[] = [];
        for (let i = Number(secondPairRange[0]); i <= Number(secondPairRange[1]); i++) {
            secondPair.push(i);
        }

        if (firstPair.some(id => secondPair.includes(id)) || secondPair.every(id => firstPair.includes(id))) {
            totalOverlaps++;
        }
    };
    console.log(totalOverlaps);
};

partTwo(parsedInput);



