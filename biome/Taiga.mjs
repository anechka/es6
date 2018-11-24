import BaseBiome from "./BaseBiome";
import Zombie from "../entity/monster/Zombie";

export
class TaigaBiome extends BaseBiome {

    constructor(temperature) {
        super(temperature, 10);
    }

    addEntity(entity) {
        if (entity instanceof Zombie) entity.setBigFoot();
        this.entityList.push(entity);
    }
}