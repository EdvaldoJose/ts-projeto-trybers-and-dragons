// Req-11
import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: Array<Fighter | SimpleFighter> = [];

  constructor(character: Fighter, monsters: Array<Fighter | SimpleFighter>) {
    super(character);

    this._character = character;
    this._monsters = monsters;
  }

  fightToDeath() {
    this._character
      .attack(this._monsters[getRandomInt(0, this._monsters.length)]);

    if (this._monsters.every((monster) => monster.lifePoints < 0)) return 1;
    this._monsters.forEach((monster) => monster.attack(this._character));

    if (this._character.lifePoints < 0) return -1;
    return 0;
  }

  fight(): number {
    const result = this.fightToDeath();
    if (result === 0) {
      return this.fight();
    }
    return result;
  }
}