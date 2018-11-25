import Check from "../utils/numberUtils"

export default
class BaseBiome {
    constructor(temperature, defaultTemp) {
        this.entityList = [];

        defaultTemp = defaultTemp || 0;

        const isTemperature = Check.isNumber(temperature);

        console.assert(
            isTemperature,
            `No temperature provided for ${this.constructor.name}`
        );

        this.biomeTemp = isTemperature ? temperature : defaultTemp;

        // Rain or Winds
        if (this.biomeTemp > 0) {
            this.fallout = this.biomeTemp > 35 ? null : "rain";
        }
        // Cold Biome
        else {
            this.fallout = "snow"
        }

        this.plants = [];
    }

    get temperature() {
        return this.biomeTemp;
    }

    addEntity(entity) {
        this.entityList.push(entity)
    }

    addWood(woodEntity) {
        if (woodEntity.live) this.plants.push(woodEntity)
    }
}