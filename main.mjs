import { TaigaBiome } from "./biome/Taiga"
import { DesertBiome } from "./biome/Desert"
import { PlainsBiome } from "./biome/Plains"

import Zombie from "./entity/monster/Zombie"

const Taiga = new TaigaBiome(19);
const Desert = new DesertBiome();
const Plains = new PlainsBiome();

Taiga.addEntity(new Zombie());
Plains.addEntity(new Zombie());
Desert.addEntity(new Zombie());

console.dir(Taiga);
console.dir(Desert);
console.dir(Plains);