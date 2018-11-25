class Wood {
    constructor(tempRange, Biome) {
        const temperature = Biome.temperature;

        const lowRange = tempRange[0];
        const highRange = tempRange[1];

        const okTemp = (lowRange < temperature) && (temperature < highRange);

        if (okTemp) {
            this.live = true;
            console.log(`Spawn ${this.constructor.name} in ${Biome.constructor.name} and temp: ${temperature}`);
        }
        console.assert(
            okTemp,
            `Can't spawn ${this.constructor.name} in Biome`
        );
    }
}

export
class Pine extends Wood {
    constructor(Biome) {
        super([-20, 30], Biome)
    }
}

export
class Spruce extends Wood {
    constructor(Biome) {
        super([-10, 25], Biome)
    }
}

export
class Oak extends Wood {
    constructor(Biome) {
        super([-15, 35], Biome)
    }
}

export
class Cactus extends Wood {
    constructor(Biome) {
        super([32, 70], Biome)
    }
}