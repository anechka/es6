import { TaigaBiome } from "./biome/Taiga"
import { DesertBiome } from "./biome/Desert"
import { PlainsBiome } from "./biome/Plains"

const Taiga = new TaigaBiome(20);
const Desert = new DesertBiome();
const Plains = new PlainsBiome(30);

//Plains.addEntity({type: "Zombie"});

console.dir(Taiga);
console.dir(Desert);
console.dir(Plains);