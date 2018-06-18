import {backgrounds, heroes, enemies, spells} from '../config';

const images = require.context('../../assets/images/sprites', true);
const imagePath = (name) => images(name, true);

export default class ImageLoader {
  constructor(gameField) {
    this.gameField = gameField;
    this.backgroundImages = {};
    this.heroImages = {};
    this.enemyImages = {};
    this.spellImages = {};
    this.promiseArray = [];
    backgrounds.forEach((backgroundName) => {
      this.promiseArray.push(this.loadImage(
        this.backgroundImages, 
        backgroundName, 
        imagePath(`./backgrounds/background-${backgroundName}.jpg`)
      ));
    });
    heroes.forEach((heroName) => {
      this.promiseArray.push(this.loadImage(
        this.heroImages, 
        heroName, 
        imagePath(`./heroes/${heroName}.png`)
      ));
    });
    enemies.forEach((enemyName) => {
      this.promiseArray.push(this.loadImage(
        this.enemyImages, 
        enemyName, 
        imagePath(`./enemies/${enemyName}.png`)
      ));
    });
    spells.forEach((spellName) => {
      this.promiseArray.push(this.loadImage(
        this.spellImages, 
        spellName, 
        imagePath(`./spells/${spellName}.png`)
      ));
    });
  }

  loadImage(destination, imageName, imageUrl) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => {
        destination[imageName] = img;
        resolve();
      };
      img.src = imageUrl;
    });
  }

  load = () => {
    return Promise.all(this.promiseArray)
      .then(resolve => [this.backgroundImages, this.heroImages, this.enemyImages, this.spellImages]);
  }
}