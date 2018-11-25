class Wood {
    constructor(tempRange, temperature) {
        const lowRange = tempRange[0];
        const highRange = tempRange[1];

        const okTemp = (lowRange < temperature) && (temperature < highRange);

        if (okTemp) {
            this.live = true;
            console.log(`Spawn ${this.constructor.name} in temp: ${temperature}`);
        }
        console.assert(
            okTemp,
            `Can't spawn ${this.constructor.name} in Biome`
        );
    }
}

export
class Pine extends Wood {
    constructor(temperature) {
        super([-20, 30], temperature)
    }
}

export
class Spruce extends Wood {
    constructor(temperature) {
        super([-10, 25], temperature)
    }
}

export
class Oak extends Wood {
    constructor(temperature) {
        super([-15, 35], temperature)
    }
}

export
class Cactus extends Wood {
    constructor(temperature) {
        super([32, 70], temperature)
    }
}