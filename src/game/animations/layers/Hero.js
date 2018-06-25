import Layer from './Layer';
import { heroConfig } from '../../configs/config';

export default class Hero extends Layer {
  constructor(image) {
    super(image);
    this.config = heroConfig;
    this.currentSprite = this.config.idleSprite;
  }

}