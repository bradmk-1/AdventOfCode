'use strict';
const givenData = require('./input');




class SlidingWindow {

    constructor(currentVals, nextVals) {
        this.currentVals = currentVals;
        this.nextVals = nextVals;
    };

    static depthChange = 0;

    checkDepth() {
        if (this.nextVals.reduce((a, b) => a + b) >this.currentVals.reduce((a, b) => a + b)) {
            SlidingWindow.depthChange++;
        };
    };

};

const measureDepthChange = (input) => {

    for (let i = 0; i < input.length; i++) {
            const currentVals = [input[i], input[i + 1], input[i + 2]];
            const nextVals = [input[i + 1], input[i + 2], input[i + 3]];


            const currentWindow = new SlidingWindow(currentVals, nextVals);
            currentWindow.checkDepth();
        };

    return console.log(SlidingWindow.depthChange);
};


measureDepthChange(givenData.data);