import fs from 'node:fs';
const data = fs.readFileSync('./input.txt', 'utf-8');
const parsedData = data.toString().trim().split('\r\n');

//Part One

//Could be solved with clever matrix stuff?
//I just use sliding window....

const partOne = (input: string[]): void => {
    const treeMap = input.map((treeRow) => treeRow.split('').map(Number));

    //Parsed input has consistent length
    const treeMapWidth = treeMap[0].length;
    const treeMapHeight = treeMap.length;

    const treeCount = [];

    for (let i = 0; i < treeMapHeight; i++) {
        const maxHeightList = [-1, -1, -1, -1];
        //Check visible trees in circle of index
        for (let j = 0; j < treeMapWidth; j++) {
            if (maxHeightList[0] < treeMap[j][i]) {
                maxHeightList[0] = treeMap[j][i];
                treeCount.push([j, i].toString());
            }
            if (maxHeightList[1] < treeMap[i][treeMapWidth - j - 1]) {
                maxHeightList[1] = treeMap[i][treeMapWidth - j - 1];
                treeCount.push([i, treeMapWidth - j - 1].toString());
            }
            if (maxHeightList[2] < treeMap[treeMapHeight - j - 1][i]) {
                maxHeightList[2] = treeMap[treeMapHeight - j - 1][i];
                treeCount.push([treeMapHeight - j - 1, i].toString());
            }
            if (maxHeightList[3] < treeMap[i][j]) {
                maxHeightList[3] = treeMap[i][j];
                treeCount.push([i, j].toString());
            }
        }
    }
    console.log([...new Set(treeCount)].length);
};

partOne(parsedData);

//Part Two

//TODO
