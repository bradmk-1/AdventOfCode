import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

//Part One

const partOne = (input: string[]): void => {
    let registerX = 1;
    let pendingRegisterAdd = false;
    let cycleCount = 0;
    let cycleToCheck = 20;

    for (let i = 0; i < input.length; i++) {
        if (pendingRegisterAdd) {
            registerX += (Number(input[i - 1].split(' ')[1]));
            pendingRegisterAdd = false;
        }
        if (input[i].split(' ')[0] === 'addx') {
            pendingRegisterAdd = true;
            cycleCount += 2;
        } else {
            cycleCount += 1;
        }

        if (cycleToCheck === cycleCount) {
            console.log(`Cycle ${cycleToCheck} is ${(cycleToCheck * registerX)}`);
            cycleToCheck += 40;
        } else if (cycleToCheck === cycleCount - 1) { //If its missed by one
            console.log(`Cycle ${cycleToCheck} is ${(cycleToCheck * registerX)}`);
            cycleToCheck += 40;
        }
    };

    if (pendingRegisterAdd) {
        registerX += (Number(input[input.length - 1].split(' ')[1]));
        pendingRegisterAdd = false;
    }
};

partOne(data);

//TODO
//Part Two



