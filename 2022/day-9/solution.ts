import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

//Part One

const partOne = (input: string[]) => {
    const visitedLocations = new Set([0, 0]);

    //X, Y
    const head = [0, 0];
    const tail = [0, 0];

    for (const move of input) {
        const moveDirection = move.split(' ')[0];

        if (moveDirection === 'U') {
            head[1] += Number(move.split(' ')[1]);
        }
        if (moveDirection === 'R') {
            head[0] += Number(move.split(' ')[1]);
        }
        if (moveDirection === 'D') {
            head[1] -= Number(move.split(' ')[1]);
        }
        if (moveDirection === 'L') {
            head[0] -= Number(move.split(' ')[1]);
        }

        //Work out correct tail path here

    };
    console.log(visitedLocations.size);
};

partOne(data);

//Goal -> find how many positions the tail vists at least once