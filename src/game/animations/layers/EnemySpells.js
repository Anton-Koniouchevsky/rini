import Spells from './Spells';

export default class EnemySpells extends Spells {
  constructor(image, srcSize, dstSize) {
    super(image, srcSize, dstSize);
    this.idleSprite = {
      srcX: 0,
      srcY: 0,
      dstX: 520,
      dstY: 330
    };
    this.currentSprite = this.idleSprite;
    this.attack = this.attack.bind(this);
    this.setNumberOfFrames();
  }

  attack(i) {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, 0, this.currentSprite.dstX - 45, this.currentSprite.dstY);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }
}