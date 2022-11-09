import data from '../a/input.js';

const binaryDiagnostic = (input : Array<string>) : void => {
    const bitTracker = new Map<number, number>([ [0, 0], [1, 0] ]);
    const gammaRate : number[] = [];
    const epsilonRate : number[] = [];

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < input.length; j++) {

            const selectedChar = input[j].split('')[i];
            if (Number(selectedChar) === 0) {
                const currentVal = bitTracker.get(0);
                bitTracker.set(0, currentVal! + 1);
            } else {
                const currentVal = bitTracker.get(1);
                bitTracker.set(1, currentVal! + 1);
            };
        };

        if (bitTracker.get(0)! > bitTracker.get(1)!) {
            gammaRate.push(0);
            epsilonRate.push(1)
        } else {
            gammaRate.push(1);
            epsilonRate.push(0);
        };

        bitTracker.set(0, 0);
        bitTracker.set(1, 0);
        
    };

    const parsedGammaRate : number = parseInt(gammaRate.join(''), 2);
    const parsedEpsilonRate : number = parseInt(epsilonRate.join(''), 2);

    console.log( parsedGammaRate *  parsedEpsilonRate );
};




binaryDiagnostic(data);

