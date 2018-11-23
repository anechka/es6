
export default class BaseBiome {
    constructor(temperature, defaultTemp) {
        defaultTemp = defaultTemp || 0;

        const isTemperature = Number.isInteger(temperature);

        console.assert(
            isTemperature,
            "No temperature provided for Biome"
        );

        this.baseTemp = isTemperature ? temperature : defaultTemp
    }

    get temperature() {
        return this.baseTemp;
    }
}