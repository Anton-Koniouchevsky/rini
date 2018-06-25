export default {
  numberOfFrames: 10,
  srcSize: 300,
  dstSize: 250,
  idleSprite: {
    srcX: 0,
    srcY: 0,
    dstX: 50,
    dstY: 320
  },
  deadSprite: {
    srcX: 2700,
    srcY: 900,
    dstX: 50,
    dstY: 320
  },
  spriteRows: {
    attack: 0,
    hurt: 0,
    jump: 1,
    walk: 2,
    death: 3,
  },
  incX: {
    attack: () => 0,
    hurt: () => 0,
    jump: () => 0,
    walk: () => 60,
    death: () => 0,
  },
  incY: {
    attack: () => 0,
    hurt: () => 0,
    jump: (i) => (i - 5) * 10,
    walk: () => 0,
    death: () => 0,
  },
}