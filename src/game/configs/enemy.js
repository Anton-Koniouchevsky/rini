export default {
  numberOfFrames: 7,
  srcSize: 400,
  dstSize: 400,
  idleSprite: {
    srcX: 0,
    srcY: 0,
    dstX: 400,
    dstY: 210
  },
  deadSprite: {
    srcX: 2400,
    srcY: 800,
    dstX: 400,
    dstY: 210
  },
  spriteRows: {
    attack: 0,
    hurt: 0,
    jump: 1,
    death: 2,
  },
  incX: {
    attack: () => 0,
    hurt: () => 0,
    jump: () => 0,
    death: () => 0,
  },
  incY: {
    attack: () => 0,
    hurt: () => 0,
    jump: (i) => (i - 4) * 10,
    death: () => 0,
  },
}