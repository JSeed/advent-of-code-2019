const fs = require('fs');
const gravityAssist = require('./gravityAssist');
const gravityAssist2 = require('./gravityAssist2');

const input = fs.readFileSync('./input.txt', 'utf-8');
const program = input.split(',').map((val) => parseInt(val, 10));

console.log('Problem 1:');
console.log(gravityAssist([...program])[0]);
console.log('Problem 2:');
console.log(gravityAssist2([...program]));