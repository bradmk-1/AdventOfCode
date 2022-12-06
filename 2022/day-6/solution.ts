import fs from 'node:fs';
const data = fs.readFileSync('input.txt', 'utf-8');

//Part One

const partOne = (input: string): void => {
    for (let i = 0; i <= input.length; i++) {
        const setOfChars = [...new Set(input.substring(i, i + 4))]
        if (setOfChars.length === 4) {
            return console.log(`First marker is at ${i + 4}`)
        };
    };
};

partOne(data);

//Part Two

const partTwo = (input: string): void => {
    for (let i = 0; i <= input.length; i++) {
        const setOfChars = [...new Set(input.substring(i, i + 14))]
        if (setOfChars.length === 14) {
            return console.log(`First message is at ${i + 14}`)
        };
    };
};

partTwo(data);

