import fs from 'node:fs';
const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n')

const partOne = (input: string[]): void => {
    const output: number[] = [];

    for (const parsedInput of input) {
        const splitInput = parsedInput.split('');
        const firstDigit = splitInput.find((el) => el.match(/^[^\d]*(\d+)/))
        const secondDigit = splitInput.reverse().find((el) => el.match(/^[^\d]*(\d+)/))
        output.push(Number(`${firstDigit}${secondDigit}`))
    }

    console.log(output.reduce((acc: number, curr: number) => acc + curr));
};

// partOne(data);

const partTwo = (input: string[]): void => {

    const lookupTable = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
    }

    const output = [];

    for (const str of input) {
        for (const [key, value] of Object.entries(lookupTable)) {
            if (str.includes(key)) {

            } else {
                output.push(str)
            }
        }
    }


}

partTwo(data);

