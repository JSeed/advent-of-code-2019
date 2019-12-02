const runProgram = (memory) => {
    memory = [...memory];
    for(let i = 0; i < memory.length; i += 4) {
        const opcode = memory[i];

        if (opcode === 1) {
            memory[memory[i + 3]] = memory[memory[i + 1]] + memory[memory[i + 2]];
        } else if (opcode === 2) {
            memory[memory[i + 3]] = memory[memory[i + 1]] * memory[memory[i + 2]];
        } else if (opcode === 99) {
            return memory;
        }
    }

    return memory;
};

module.exports = runProgram;