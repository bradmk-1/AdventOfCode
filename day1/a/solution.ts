import data  from './input';

const measureDepthChange = (input : Array<number>) : void => {
    let depthChange : number = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            depthChange++
        };
    };
    return console.log(depthChange);
};


measureDepthChange(data);