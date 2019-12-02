const fs = require('fs');
const calculateFuelRequirement = require('./calculateFuelRequirement');
const calculateFuelRequirement2 = require('./calculateFuelRequirement2');
const input = fs.readFileSync('input.txt', 'utf-8');
const moduleMasses = input.split('\n').map((val) => parseInt(val)).slice(0, -1);
// console.log(moduleMasses);
console.log('Problem 1:');
console.log(calculateFuelRequirement(moduleMasses));

console.log('Problem 2:');
console.log(calculateFuelRequirement2(moduleMasses));