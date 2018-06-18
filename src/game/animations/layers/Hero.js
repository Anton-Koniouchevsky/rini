import Layer from './Layer';

export default class Hero extends Layer {
  constructor(image) {
    super(image);
    this.numberOfSprites = 10;
    this.srcSize = 300;
    this.dstSize = 250;
    this.idleSprite = {
      srcX: 0,
      srcY: 0,
      dstX: 50,
      dstY: 320
    };
    this.deadSprite = {
      srcX: 2700,
      srcY: 900,
      dstX: 50,
      dstY: 320
    };
    this.currentSprite = this.idleSprite;
    this.setNumberOfFrames();
    this.walk.numberOfFrames = 25;
  }

  attack = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, 0, this.currentSprite.dstX, 320);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  hurt = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, 0, this.currentSprite.dstX, 320);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  jump = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize, this.currentSprite.dstX, 270 + Math.abs(5 - i) * 10);
    } else {
      this.currentSprite = this.idleSprite;
    }
  }

  death = (i) => {
    if (i < this.numberOfSprites) {
      this.setSprite(this.srcSize * i, this.srcSize * 3, this.currentSprite.dstX, 320);
    } else {
      this.currentSprite = this.deadSprite;
    }
  }

  walk = (i) => {
    this.setSprite(this.srcSize * (i % this.numberOfSprites), this.srcSize * 2, this.idleSprite.dstX + i * 30, 320 - 3 * (i % 5));
  }

}