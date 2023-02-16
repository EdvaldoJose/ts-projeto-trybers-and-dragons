// Req-02
import Dwarf from './Dwarf';
import Race from './Race';

export default class Elf extends Race {
  static instances = 0;
  private _maxLifePoints = 99;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }
}