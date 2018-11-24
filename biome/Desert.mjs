import BaseBiome from "./BaseBiome";

export
class DesertBiome extends BaseBiome {
    constructor(temperature) {
      super(temperature, 40)
    }
}