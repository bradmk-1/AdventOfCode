import fs from 'node:fs';
const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n')

const partOne = (input: string[]): void => {

    const mappedGames = input.map(value => value.split(':'));
    const remappedGames = mappedGames.map(value => value[1].split(/[;:]/g));

    let total = 0;

    for (let i = 0; i < remappedGames.length; i++) {

        let cubeLimit = false;

        for (const entry of remappedGames[i]) {
            const cubes = entry.split(',');
            for (const cube of cubes) {
                if (cube.includes('red')) {
                    const cleanStr = cube.replace(/\D/g, '');
                    if (Number(cleanStr) > 12) {
                        cubeLimit = true;
                    }
                } else if (cube.includes('green')) {
                    const cleanStr = cube.replace(/\D/g, '');
                    if (Number(cleanStr) > 13) {
                        cubeLimit = true;
                    }
                } else if (cube.includes('blue')) {
                    const cleanStr = cube.replace(/\D/g, '');
                    if (Number(cleanStr) > 14) {
                        cubeLimit = true;
                    }
                }
            }
        }

        if (!cubeLimit) {
            total += (i + 1);
        }
    }
    console.log(total);
}

partOne(data);