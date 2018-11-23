
export default class BaseBiome {
    constructor(temperature, defaultTemp) {
        defaultTemp = defaultTemp || 0;

        const noTemp = temperature === 0 && temperature;

        console.assert(
            noTemp,
            "No temperature provided for Biome"
        );

        this.baseTemp = noTemp ? defaultTemp : temperature
    }

    get temperature() {
        return this.baseTemp;
    }
}