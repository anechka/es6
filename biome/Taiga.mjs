import BaseBiome from "./BaseBiome";
import { Pine, Spruce } from "./Wood"
import Zombie from "../entity/monsters/Zombie";

export
class TaigaBiome extends BaseBiome {

    constructor(temperature) {
        super(temperature, 10);

        this.addWood(new Pine(this));
        this.addWood(new Spruce(this))
    }

    addEntity(entity) {
        if (
            entity instanceof Zombie &&
            this.fallout === "snow"
        )
        {
            entity.setBigFoot();
        }
        this.entityList.push(entity);
    }
}