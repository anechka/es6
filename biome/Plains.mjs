import BaseBiome from "./BaseBiome";
import {Pine, Oak} from "./Wood";

export
class PlainsBiome extends BaseBiome {
    constructor(temperature) {
        super(temperature, 20);

        this.addWood(new Pine(this));
        this.addWood(new Oak(this));
    }
}