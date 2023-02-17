// Req-05
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instances = 0;
  private _energyType: EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Necromancer.instances += 1;
    return Necromancer.instances;
  }
}