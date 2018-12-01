class Wood {
    constructor(low, high) {
        this.temperature = {
            low,
            high
        };
    }
}

export
class Pine extends Wood {
    constructor() {
        super(-20, 30)
    }
}

export
class Spruce extends Wood {
    constructor() {
        super(-10, 25)
    }
}

export
class Oak extends Wood {
    constructor() {
        super(-15, 35)
    }
}

export
class Cactus extends Wood {
    constructor() {
        super(32, 70)
    }
}