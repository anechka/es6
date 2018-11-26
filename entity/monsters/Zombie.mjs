import Entity from "../Entity";

const ZombietTypes = {
    Zombie: "Zombie",
    BigFoot: "BigFoot",
    Husk: "Husk"
};

export default
class Zombie extends Entity {
    constructor() {
        super();

        this.type = ZombietTypes.Zombie;
    }

    setHusk() {
        this.type = ZombietTypes.Husk;
    }

    setBigFoot() {
        this.type = ZombietTypes.BigFoot;
    }
}