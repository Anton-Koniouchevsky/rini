import Layer from './Layer';

export default class Enemy extends Layer {
  constructor(image) {
    super(image);
    this.numberOfSprites = 7;
    this.srcSize = 400;
    this.dstSize = 400;
    this.idleSprite = {
      srcX: 0,
      srcY: 0,
      dstX: 400,
      dstY: 210
    };
    this.deadSprite = {
      srcX: 2400,
      srcY: 800,
      dstX: 400,
      dstY: 210
    };
    this.currentSprite = this.idleSprite;
    this.setNumberOfFrames();
  }

  attack = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, 0, this.currentSprite.dstX, 210);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  hurt = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, 0, this.currentSprite.dstX, 210);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  jump = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize, this.currentSprite.dstX, 150 + Math.abs(4 - i) * 10);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  death = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize * 2, this.currentSprite.dstX, 210);
    } else {
      this.currentSprite = this.deadSprite;
    }
  }

}