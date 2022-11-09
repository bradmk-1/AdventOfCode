'use strict';
const givenData = require('./input');

const measureDepthChange = (input) => {
    let depthChange = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            depthChange++
        };
    };
    return console.log(depthChange);
};


measureDepthChange(givenData.data);