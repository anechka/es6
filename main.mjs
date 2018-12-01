import { TaigaBiome } from "./biome/Taiga"
import { DesertBiome } from "./biome/Desert"
import { PlainsBiome } from "./biome/Plains"

import Zombie from "./entity/monsters/Zombie"
import { Rabbit } from "./entity/animals/Animal";

const Taiga = new TaigaBiome(0);
const Desert = new DesertBiome();
const Plains = new PlainsBiome();

import * as Wood from "./biome/Wood"

Taiga.addWood(new Wood.Pine());
Desert.addWood(new Wood.Cactus());

Taiga.addEntity(new Zombie());
Plains.addEntity(new Zombie());
Desert.addEntity(new Zombie());

Plains.addAnimal(new Rabbit());
Taiga.addAnimal(new Rabbit());
Desert.addAnimal(new Rabbit());

console.dir(Taiga);
console.dir(Desert);
console.dir(Plains);
