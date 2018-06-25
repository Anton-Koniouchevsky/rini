import Layer from './Layer';
import { enemySpellsConfig } from '../../configs/config';

export default class EnemySpells extends Layer {
  constructor(image) {
    super(image);
    this.config = enemySpellsConfig;
    this.currentSprite = this.config.idleSprite;
  }

  attack = (i) => {
    this.setSprite(i, 'attack');
  }
}