import Layer from './Layer';
import { enemyConfig } from '../../configs/config';

export default class Enemy extends Layer {
  constructor(image) {
    super(image);
    this.config = enemyConfig;
    this.currentSprite = this.config.idleSprite;
  }

}