import BaseBiome from "./BaseBiome";
import Zombie from "../entity/monster/Zombie";
import {Cactus} from "./Wood";

export
class DesertBiome extends BaseBiome {
    constructor(temperature) {
        super(temperature, 40);

        this.addWood(new Cactus(this));
    }

    addEntity(entity) {
        if (entity instanceof Zombie) entity.setHusk();
        this.entityList.push(entity);
    }
}