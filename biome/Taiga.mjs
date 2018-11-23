import BaseBiome from "./BaseBiome";

export
class TaigaBiome extends BaseBiome {

    constructor(temperature) {
        super(temperature, 10);
        this.rainFall = this.temperature > 0 ? "rain" : "snow";
    }
}