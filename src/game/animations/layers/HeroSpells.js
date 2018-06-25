import Layer from './Layer';
import { heroSpellsConfig } from '../../configs/config';

export default class HeroSpells extends Layer {
  constructor(image) {
    super(image);
    this.config = heroSpellsConfig;
    this.currentSprite = this.config.idleSprite;
  }

  lvlup = (i) => {
    this.setSprite(i, 'lvlup');
  }

  psyAttack = (i) => {
    this.setSprite(i, 'psyAttack');
  }

  iceAttack = (i) => {
    this.setSprite(i, 'iceAttack');
  }

  fireAttack = (i) => {
    this.setSprite(i, 'fireAttack');
  }

  hill = (i) => {
    this.setSprite(i, 'hill');
  }

}