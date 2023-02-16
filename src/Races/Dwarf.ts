// Req-02
import Race from './Race';

export default class Dwarf extends Race {
  static instances = 0;
  private _maxLifePoints = 80;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf.instances += 1;
    return Dwarf.instances;
  }
}