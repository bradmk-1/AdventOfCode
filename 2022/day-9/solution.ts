import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

//Part One

const partOne = (input: string[]): void => {
    const visitedLocations = new Set();

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

        //Calc tail coords based on head coords

        //Up or right moves
        if (Math.abs(head[0] - tail[0]) > 1) {
            for (let i = 0; i <= head[0]; i++) {
                if (head[0] > tail[0]) {
                    tail[0] += 1;
                } else {
                    tail[0] -= 1
                }
                visitedLocations.add(tail.toString());
            };
        }

        if (Math.abs(head[1] - tail[1]) > 1) {
            for (let i = 0; i <= head[1]; i++) {
                if (head[1] > tail[1]) {
                    tail[1] += 1;
                } else {
                    tail[1] -= 1
                }
                visitedLocations.add(tail.toString());
            };
        };
        console.log(tail);

    };
    console.log(visitedLocations.size + 1);
};

partOne(data);


//THIS IS FINE
// [1, 3]
// [2, 4]

//THIS ISNT FINE
// [1, 2]
// [2, 4]


//Goal -> find how many positions the tail vists at least once