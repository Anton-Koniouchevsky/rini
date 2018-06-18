export default class Layer {
  constructor(image) {
    this.image = image;
  }

  setSprite(srcX, srcY, dstX, dstY) {
    this.currentSprite = {
      srcX,
      srcY,
      dstX,
      dstY
    }
  }

  draw(ctx) {
    const { srcX, srcY, dstX, dstY } = this.currentSprite;
    ctx.drawImage(this.image, srcX, srcY, this.srcSize, this.srcSize, dstX, dstY, this.dstSize, this.dstSize);
  }

  setNumberOfFrames() {
    Object.keys(this)
      .filter(key => typeof(this[key]) === 'function')
      .forEach(func => this[func].numberOfFrames = this.numberOfSprites);
  }
}