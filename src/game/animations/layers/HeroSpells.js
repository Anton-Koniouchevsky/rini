import Spells from './Spells';

export default class HeroSpells extends Spells {
  constructor(image, srcSize, dstSize) {
    super(image, srcSize, dstSize);
    this.idleSprite = {
      srcX: 0,
      srcY: 0,
      dstX: 40,
      dstY: 290
    };
    this.currentSprite = this.idleSprite;
    this.lvlup = this.lvlup.bind(this);
    this.psyAttack = this.psyAttack.bind(this);
    this.iceAttack = this.iceAttack.bind(this);
    this.fireAttack = this.fireAttack.bind(this);
    this.hill = this.hill.bind(this);
    this.setNumberOfFrames();
  }

  lvlup(i) {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, 0, this.currentSprite.dstX, this.currentSprite.dstY);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  psyAttack(i) {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize, this.currentSprite.dstX + 60, this.currentSprite.dstY);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  iceAttack(i) {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize * 2, this.idleSprite.dstX + 120 + 40 * i, this.currentSprite.dstY);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  fireAttack(i) {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize * 3, this.idleSprite.dstX + 10 + 70 * i, this.currentSprite.dstY);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  hill(i) {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize * 4, this.currentSprite.dstX, this.currentSprite.dstY);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }
}