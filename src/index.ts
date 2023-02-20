// Req-13
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Vero Zapal');
const player2 = new Character('Mezev');
const player3 = new Character('Doelamir');

// ('Vero Zapal');
// ('Mezev');
// ('Doelamir');

player1.levelUp();
player1.levelUp();
// player1.levelUp();

const monster1 = new Monster(200, 14);
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Array<Battle>): void {
  battles.forEach((battle) => battle.fight());
}

// const runBattles = (battles: Array<Battle>): void => battles
//   .forEach((battle) => battle.fight());

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };