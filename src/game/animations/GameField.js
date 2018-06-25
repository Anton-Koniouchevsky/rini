import Hero from './layers/Hero';
import Enemy from './layers/Enemy';
import HeroSpells from './layers/HeroSpells';
import EnemySpells from './layers/EnemySpells';
import ImageLoader from '../animations/ImageLoader';
import { getRandomProperty } from '../../utils/randomFunctions';
import { gameFieldConfig as config} from '../configs/config';

export default class GameField {
  constructor(currentHero) {
    this.ctx = document.querySelector('#game-field').getContext('2d');
    this.currentHero = currentHero;
    this.ctx.shadowColor = 'black';
    this.ctx.strokeStyle = "#FF0";
    this.ctx.shadowBlur = 10; 
  }

  init = async () => {
    return new Promise (async resolve => {
      const imageLoader = new ImageLoader(this.currentHero);
      [ this.backgroundImages, this.heroImages, this.enemyImages, this.spellImages ] = await imageLoader.load();
      this.currentBackground = this.currentBackground || getRandomProperty(this.backgroundImages);
      this.currentEnemy = this.currentEnemy || getRandomProperty(this.enemyImages);
      this.hero = new Hero(this.heroImages[this.currentHero]);
      this.enemy = new Enemy(this.enemyImages[this.currentEnemy]);
      this.hero.spells = new HeroSpells(this.spellImages['hero-spells']);
      this.enemy.spells = new EnemySpells(this.spellImages['enemy-spells']);
      this.drawScene();
      resolve();
    });
    
  }

  setUnitsInfo = ({ heroName, heroHP }, { enemyName, enemyHP }) => {
    this.hero.name = heroName;
    this.hero.HP = heroHP;
    this.enemy.name = enemyName;
    this.enemy.HP = enemyHP;
  }

  animate(animations) {
    return new Promise(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        this.clear();
        animations.forEach(animation => {
          animation(i);
        });
        this.drawScene();
        this.drawLegend();
        if (i === config.numberOfFrames) {
            clearInterval(interval);
            resolve();
        }
        i++;
      }, config.frameDuration);
    });
  }

  clear() {
    this.ctx.clearRect(config.startX, config.startY, config.width, config.height);
  }

  drawScene = () => {
    this.clear();
    this.drawBackground();
    this.hero.draw(this.ctx);
    this.enemy.draw(this.ctx);
    this.hero.spells.draw(this.ctx);
    this.enemy.spells.draw(this.ctx);
  }

  drawLegend = (heroHP = this.hero.HP, enemyHP = this.enemy.HP) => {
    this.ctx.textAlign = "center";
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(this.hero.name , 170, 50);
    this.ctx.fillText(this.enemy.name , 600, 50);
    this.ctx.fillStyle = "#00F";
    this.ctx.fillRect(70, 70, 200, 30);
    this.ctx.fillRect(500, 70, 200, 30);
    this.ctx.fillStyle = "#F00";
    this.ctx.fillRect(70, 70, this.hero.HP * 2, 30);
    this.ctx.fillRect(500, 70, this.enemy.HP * 2, 30);
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(`${heroHP}/100` , 170, 95);
    this.ctx.fillText(`${enemyHP}/100` , 600, 95);
  }

  changeEnemyHP = (enemyHP) => {
    return new Promise(resolve => {
      let i = 0;
      let decrement = (this.enemy.HP - enemyHP) / 10;
      
      const interval = setInterval(() => {
        this.enemy.HP -= decrement;
        this.clear();
        this.drawScene();
        this.drawLegend(this.hero.HP, enemyHP);
        if (i > 8) {
            clearInterval(interval);
            this.enemy.HP = enemyHP;
            resolve();
        }
        i++;
      }, 50);
    });
  }

  changeHeroHP = (heroHP) => {
    return new Promise(resolve => {
      let i = 0;
      let decrement = (this.hero.HP - heroHP) / 10;      
      const interval = setInterval(() => {
        this.hero.HP -= decrement;
        this.clear();
        this.drawScene();
        this.drawLegend(heroHP, this.enemy.HP);
        if (i > 8) {
            clearInterval(interval);
            this.hero.HP = heroHP;
            resolve();
        }
        i++;
      }, 50);
    });
  }

  drawBackground() {
    this.ctx.drawImage(this.backgroundImages[this.currentBackground], config.startX, config.startY, config.width, config.height);
  }

  drawMessage = (message) => {
    return new Promise(resolve => {
      this.drawScene();
      this.drawLegend();
      this.ctx.textAlign = "center";
      this.ctx.font = 'bold 70px sans-serif';
      this.ctx.fillStyle = "#F00";
      this.ctx.strokeStyle = "#FF0";
      this.ctx.fillText(message, config.message.offset.x, config.message.offset.y);
      this.ctx.strokeText(message, config.message.offset.x, config.message.offset.y);
      setTimeout(() => {
        this.drawScene();
        this.drawLegend();
        resolve();
      }, config.message.duration);
    });
  }

  heroAttack = (type, isSuccessful) => {
    return new Promise(async resolve => {
      await this.animate([
        this.hero.attack,
        this.hero.spells[type]
      ]);
      if(isSuccessful) {
        await this.animate([this.enemy.hurt]);
      }
      resolve();
    });
  }

  enemyAttack = (isSuccessful) => {
    return new Promise(async resolve => {
      await this.animate([this.enemy.attack, this.enemy.spells.attack]);
      if(isSuccessful) {
        await this.animate([this.hero.hurt]);
      }
      resolve();
    });
  }

  heroWin = async () => {
    await this.animate([this.hero.spells.lvlup, this.enemy.death]);
    await this.animate([this.hero.jump]);
    await this.animate([this.hero.walk]);
    this.resetField();
  }

  enemyWin = async () => {
    await this.animate([this.hero.death]);
    await this.animate([this.enemy.jump]);
    await this.drawMessage('Ты проиграл :(');
  }

  resetField = () => {
    this.currentBackground = getRandomProperty(this.backgroundImages);
    this.currentEnemy = getRandomProperty(this.enemyImages);
    this.enemy.image = this.enemyImages[this.currentEnemy];
    this.enemy.currentSprite = this.enemy.config.idleSprite;
    this.hero.currentSprite = this.hero.config.idleSprite;
  }
  
}