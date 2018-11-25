import BaseBiome from "./BaseBiome";
import { Pine, Spruce } from "./Wood"
import Zombie from "../entity/monster/Zombie";

export
class TaigaBiome extends BaseBiome {

    constructor(temperature) {
        super(temperature, 10);

        this.addWood(new Pine(this.temperature));
        this.addWood(new Spruce(this.temperature));
    }

    addEntity(entity) {
        if (entity instanceof Zombie) entity.setBigFoot();
        this.entityList.push(entity);
    }
}