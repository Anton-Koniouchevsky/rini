import {backgrounds, heroes, enemies, spells} from '../configs/config';

const images = require.context('../../assets/images/sprites', true);
const imagePath = (name) => images(name, true);

export default class ImageLoader {
  constructor(currentHero) {
    this.backgrounds = {};
    this.heroes = {};
    this.enemies = {};
    this.spells = {};
    this.promiseArray = [];
    backgrounds.forEach((backgroundName) => {
      this.loadImage('backgrounds', backgroundName);
    });
    enemies.forEach((enemyName) => {
      this.loadImage('enemies', enemyName);
    });
    spells.forEach((spellName) => {
      this.loadImage('spells', spellName);
    });
    this.loadImage('heroes', currentHero);
  }

  loadImage(destination, imageName) {
    this.promiseArray.push(
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this[destination][imageName] = img;
          resolve();
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = imagePath(`./${destination}/${imageName}.png`);
    }));
  }

  load = () => {
    return Promise.all(this.promiseArray)
      .then(() => [this.backgrounds, this.heroes, this.enemies, this.spells])
      .catch((error) => ({error}));
  }

}