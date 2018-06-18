import Layer from './Layer';

export default class Spells extends Layer {
  constructor(image, srcSize, dstSize) {
    super(image);
    this.numberOfSprites = 8;
    this.srcSize = srcSize;
    this.dstSize = dstSize;
  }
}