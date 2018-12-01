import BaseBiome from "./BaseBiome";
import Zombie from "../entity/monsters/Zombie";

export
class DesertBiome extends BaseBiome {
    constructor(temperature) {
        super(temperature, 40);
    }

    addEntity(entity) {
        if (entity instanceof Zombie) entity.setHusk();
        this.entityList.push(entity);
    }
}