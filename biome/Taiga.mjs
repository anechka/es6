import BaseBiome from "./BaseBiome";
import Zombie from "../entity/monsters/Zombie";

export
class TaigaBiome extends BaseBiome {

    constructor(temperature) {
        super(temperature, 10, ["grass", "leaves"]);
    }

    addEntity(entity) {
        const isBigFoot =
            entity instanceof Zombie
            &&
            this.fallout === "snow";

        if (isBigFoot) entity.setBigFoot();

        this.entityList.push(entity);
    }
}