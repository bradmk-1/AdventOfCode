import fs from 'node:fs'
const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const partOne = (input: string[]): void => {
    const mappedInput = input.map(card => card.split('|'));
    const parseNums = mappedInput.map(card => card.map(side => side.split(' ')));

    let total = 0;

    for (const card of parseNums) {
        let count = 0;
        for (const leftValue of card[0]) {
            if (card[1].includes(leftValue) && leftValue !== '') {
                count++;
            }
        }
        if (count > 0) {
            total += 2 ** (count - 1);
        }
    }

    console.log(total);
}

partOne(data);
