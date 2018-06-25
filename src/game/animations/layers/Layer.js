export default class Layer {
  constructor(image) {
    this.image = image;
  }

  draw(ctx) {
    const { srcX, srcY, dstX, dstY } = this.currentSprite;
    ctx.drawImage(this.image, srcX, srcY, this.config.srcSize, this.config.srcSize, dstX, dstY, this.config.dstSize, this.config.dstSize);
  }

  setSprite = (
    i, 
    mode,
    defaultSprite = this.config.idleSprite 
  ) => {
    if (i < this.config.numberOfFrames) {
      this.currentSprite = {
        srcX: this.config.srcSize * i, 
        srcY: this.config.srcSize * this.config.spriteRows[mode], 
        dstX: this.currentSprite.dstX + this.config.incX[mode](i), 
        dstY: this.currentSprite.dstY + this.config.incY[mode](i),
      };
    } else {
      this.currentSprite = defaultSprite;
    }
  }

  attack = (i) => {
    this.setSprite(i, 'attack');
  }

  hurt = (i) => {
    this.setSprite(i, 'hurt');
  }

  jump = (i) => {
    this.setSprite(i, 'jump');
  }

  death = (i) => {
    this.setSprite(i, 'death', this.config.deadSprite);
  }

  walk = (i) => {
    this.setSprite(i, 'walk');
  }

}