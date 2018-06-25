export default {
  numberOfFrames: 7,
  srcSize: 100,
  dstSize: 150,
  idleSprite: {
    srcX: 0,
    srcY: 0,
    dstX: 520,
    dstY: 330
  },
  spriteRows: {
    attack: 0,
  },
  incX: {
    attack: () => -45,
  },
  incY: {
    attack: () => -5,
  },
}