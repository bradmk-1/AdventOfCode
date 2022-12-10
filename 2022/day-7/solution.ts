import fs from 'node:fs';
const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

//Part One

class directory {
    name: string;
    contents: string[];
    totalSize: number | undefined;

    constructor(name: string, contents: string[]) {
        this.name = name;
        this.contents = contents;
    }
};

//Walk list of filesystem commands, parse them to build structure of each dir
const buildFs = (input: string[]): directory[] => {
    const directoryList = []

    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('cd') && input[i + 1].includes('ls')) {
            if (input.slice(i + 2, input.length).findIndex(command => command.includes('cd')) !== -1) {
                const filesInDir = input.slice(i + 2, input.slice(i + 2, input.length).findIndex(command => command.includes('cd')) + i + 2);
                directoryList.push(new directory(input[i].split(' ')[2], filesInDir));
            } else {
                const filesInDir = input.slice(i + 2, input.length);
                directoryList.push(new directory(input[i].split(' ')[2], filesInDir));
            }
        };
    };
    return directoryList;
};

// (Recursivley) sum singular dir and all children of it
const sumDir = (dir: directory, dirList: directory[]): number => {
    let dirSize = 0;
    for (const item of dir.contents) {
        if (Number(item.split(' ')[0])) {
            dirSize += Number(item.split(' ')[0]);
        } else if (item.split(' ')[0] === 'dir' && dirSize <= 100000) {
            dirSize += sumDir(dirList.find(dir => dir.name === item.split(' ')[1])!, dirList);
        }
    };
    return dirSize;
};

const builtFs = buildFs(data);

const sumAllDirs = (dirList: directory[]): void => {
    const dirsUnderTarget = [];
    for (const dir of dirList) {
        const value = sumDir(dir, dirList);
        console.log(value);
        console.log(dir);
        if (value <= 100000)
            dirsUnderTarget.push(value);
    };
    console.log(dirsUnderTarget);
    console.log(dirsUnderTarget.reduce((acc, value) => acc + value));
}

sumAllDirs(builtFs);

//Directory is the sum of the sizes of the files it contains, directly or indirectly. (Directories themselves do not count as having any intrinsic size.

[
    0, 30443, 30443, 11756, 0,
    0, 35406, 97774, 70441, 63455,
    55629, 55629, 7826, 43660, 45969,
    83665, 0, 0, 15123, 47411,
    51165, 54571, 0, 82637, 23958,
    70960, 28122, 81971, 2562, 139875,
    62087, 0
]