import input from './input';

const partOne = (input: number[]): number[] => input.toString().split('-1,')
    .map((elf: string) => elf.split(',')
        .reduce((acc, val) => acc + Number(val), 0));

console.log(Math.max(...partOne(input)));



const partTwo = (input: number[]) => partOne(input).sort((a: number, b: number) => b - a);
console.log(partTwo(input));


