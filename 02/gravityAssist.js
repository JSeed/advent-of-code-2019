const runProgram = require('./runProgram');

const gravityAssist = (memory) => {
    memory = [...memory];
    memory[1] = 12;
    memory[2] = 2;

    return runProgram(memory);
};

module.exports = gravityAssist;