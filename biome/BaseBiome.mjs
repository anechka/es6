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

    addWood(Wood) {

        const
        canLive =
            (Wood.temperature.low < this.biomeTemp)
            &&
            (this.biomeTemp < Wood.temperature.high);

        let message = `Can't spawn tree in ${this.constructor.name}`;

        if (canLive) {
            this.plants.push(Wood);
            // Update OK log message
            message = `Spawn ${Wood.constructor.name} in ${this.constructor.name} and temp: ${this.biomeTemp}`
        }

        console.log(message);
    }

    addAnimal(Animal) {

        for (let biomeFood of this.foodList) {

            if (Animal.food.includes(biomeFood)) {

                Animal.setForTemp(this.temperature);

                this.animals.push(Animal);
                break
            }

        }
    }

}