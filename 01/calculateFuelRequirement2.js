const calculateFuelForMass = (mass) => {
    const fuel = Math.floor(mass / 3) - 2;
    return fuel > 0 ? fuel + calculateFuelForMass(fuel) : 0;   
}

const calculateFuelRequirement2 = (moduleMasses) => {
    return moduleMasses
        .map(calculateFuelForMass)
        .reduce((totalFuel, moduleFuel) => totalFuel + moduleFuel);
};

module.exports = calculateFuelRequirement2;