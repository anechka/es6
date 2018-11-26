import Check from "../utils/numberUtils"

export default
class BaseBiome {
    constructor(temperature, defaultTemp, foodList) {
        this.entityList = [];
        this.plants = [];
        this.animals = [];

        this.foodList = foodList || [];

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

    addAnimal(animal) {

        for (let biomeFood of this.foodList) {

            if (animal.food.includes(biomeFood)) {

                animal.setForTemp(this.temperature);

                this.animals.push(animal);
                break
            }

        }
    }

}