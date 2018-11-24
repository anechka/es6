
export default class BaseBiome {
    constructor(temperature, defaultTemp) {
        this.entityList = [];

        defaultTemp = defaultTemp || 0;

        const isTemperature = Number.isInteger(temperature);

        console.assert(
            isTemperature,
            "No temperature provided for Biome"
        );

        this.baseTemp = isTemperature ? temperature : defaultTemp;

        // Rainless
        if (this.baseTemp > 0) {
            this.rainFall = this.baseTemp > 35 ? null : "rain";
        }
        // Cold Biome
        else {
            this.rainFall = "snow"
        }
    }

    get temperature() {
        return `temp is ${this.baseTemp} cels`;
    }

    addEntity(entity) {
        this.entityList.push(entity)
    }
}