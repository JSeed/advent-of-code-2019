const calculateFuelRequirement = (moduleMasses) => {
    return moduleMasses
        .map((moduleMass) => Math.floor(moduleMass / 3) - 2)
        .reduce((totalFuel, moduleFuel) => totalFuel + moduleFuel);
};

module.exports = calculateFuelRequirement;