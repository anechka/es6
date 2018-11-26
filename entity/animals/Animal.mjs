class Animal {
    constructor(food) {
        this.food = food;
    }

    setForTemp(biomeTemp) {}
}

export class Rabbit extends Animal {
    constructor() {
        super(["carrot", "grass"]);

        this.leather = "gray";
    }

    setForTemp(biomeTemp) {
        if (biomeTemp <= 0) {
            this.leather = "white"
        }
    }
}