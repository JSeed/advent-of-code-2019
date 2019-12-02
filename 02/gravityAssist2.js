const runProgram = require('./runProgram');

const gravityAssist2 = (memory) => {
    for(let verb = 0; verb < 100; verb++) {
        for(let noun = 0; noun < 100; noun++) {
            const programMemory = [...memory];
            programMemory[1] = noun;
            programMemory[2] = verb;
        
            const output = runProgram(programMemory)[0];

            if (output === 19690720) {
                return 100 * noun + verb;
            }

        }
    }

    
};

module.exports = gravityAssist2;