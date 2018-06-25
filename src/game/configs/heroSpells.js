 export default {
  numberOfFrames: 7,
  srcSize: 300,
  dstSize: 250,
  idleSprite: {
    srcX: 0,
    srcY: 0,
    dstX: 40,
    dstY: 290
  },
  spriteRows: {
    lvlup: 0,
    psyAttack: 1,
    iceAttack: 2,
    fireAttack: 3,
    hill: 4,
  },
  increment: {
    psyAttack: 60,
    iceAttack: 60,
    fireAttack: 60,
  },
  incX: {
    lvlup: () => 0,
    psyAttack: () => 60,
    iceAttack: () => 60,
    fireAttack: () => 60,
    hill: () => 0,
  },
  incY: {
    lvlup: () => 0,
    psyAttack: () => 0,
    iceAttack: () => 0,
    fireAttack: () => 0,
    hill: () => 0,
  },
}