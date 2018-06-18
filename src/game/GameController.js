import GameField from "./animations/GameField";
import { getName } from "../utils/nameGenerator";
import { setActiveSession, setResult } from '../store/firebase/database';
import { generateDeviation, generateBoolean } from '../utils/randomFunctions';

export default class GameController {
  constructor(currentUser, activeSession, openSpellModal, openEndGameModal, isEffectsMuted, isGameLoaded) {
    this.hero = currentUser.hero,
    this.level = activeSession.level;
    this.id = currentUser.id;
    this.heroName = currentUser.name;
    this.heroHP = activeSession.heroHP;
    this.enemyName = activeSession.enemyName;
    this.enemyHP = activeSession.enemyHP;
    this.openSpellModal = openSpellModal;
    this.openEndGameModal = openEndGameModal;
    this.isEffectsMuted = isEffectsMuted;
    this.isGameLoaded = isGameLoaded;
    this.initGameField();
  }

  initGameField = async () => {
    this.gameField = new GameField(this.hero);
    await this.gameField.init();
    this.gameField.setUnitsInfo( 
      { heroName: this.heroName, heroHP: this.heroHP }, 
      { enemyName: this.enemyName, enemyHP: this.enemyHP },
    );
    this.isGameLoaded();
    this.delay(this.greetings);
  }

  delay = (callback) => {
    setTimeout(callback, 1000);
  }

  toggleEffects = (isEffectsMuted) => {
    this.isEffectsMuted = isEffectsMuted;
  }

  greetings = async () => {
    await this.gameField.drawMessage(`Уровень ${this.level + 1}`);
    this.heroTurn();
  }

  heroTurn = async () => {
    setActiveSession(this.id, this.level, this.heroHP, this.enemyHP, this.enemyName);
    await this.gameField.drawMessage('Твой ход');
    this.openSpellModal();
  }

  heroAttack = async (spellType, isRight) => {
    !this.isEffectsMuted && document.querySelector('#hero-spell-use-audio').play();
    if(spellType === 'hill') {
      await this.gameField.heroAttack(spellType, false);
      if(isRight) {
        const heroHill = generateDeviation(60, 20);
        this.heroHP = this.heroHP + heroHill > 100 ? 100 : this.heroHP + heroHill;
        await this.gameField.changeHeroHP(this.heroHP);
      } else {
        !this.isEffectsMuted && document.querySelector('#attack-miss-audio').play();
        await this.gameField.drawMessage('Не удалось!');
      }
    } else {
      await this.gameField.heroAttack(spellType, isRight);
      if(isRight) {
        !this.isEffectsMuted && document.querySelector('#hero-attack-success-audio').play();
        const heroDamage = generateDeviation(30, 20);
        this.enemyHP = this.enemyHP - heroDamage > 0 ? this.enemyHP - heroDamage : 0;
        await this.gameField.changeEnemyHP(this.enemyHP);
      } else {
        !this.isEffectsMuted && document.querySelector('#attack-miss-audio').play();
        await this.gameField.drawMessage('Промах!');
      }
    }
    if(this.enemyHP === 0) {
      this.heroWin();
    } else {
      this.enemyAttack();
    }
  }

  enemyAttack = async () => {
    await this.gameField.drawMessage('Ход врага');
    const enemyAttack = generateBoolean();
    !this.isEffectsMuted && document.querySelector('#enemy-spell-use-audio').play();
    await this.gameField.enemyAttack(enemyAttack);
    if(enemyAttack) {
      !this.isEffectsMuted && document.querySelector('#enemy-attack-success-audio').play();
      const enemyDamage = generateDeviation(25, 16) + this.level;
      this.heroHP = this.heroHP - enemyDamage > 0 ? this.heroHP - enemyDamage : 0;
      await this.gameField.changeHeroHP(this.heroHP);
    } else {
      !this.isEffectsMuted && document.querySelector('#attack-miss-audio').play();
      await this.gameField.drawMessage('Промах!');
    }
    if(this.heroHP === 0) {
      this.enemyWin();
    } else {
      this.heroTurn();
    }    
  }

  heroWin = async () => {
    !this.isEffectsMuted && document.querySelector('#hero-win-audio').play();
    await this.gameField.heroWin();
    this.level++;
    this.enemyHP = 100;
    this.enemyName = getName();
    this.gameField.setUnitsInfo( 
      { heroName: this.heroName, heroHP: this.heroHP }, 
      { enemyName: this.enemyName, enemyHP: this.enemyHP },
    );
    this.greetings();
  }

  enemyWin = async () => {
    setResult(this.id, this.heroName, this.level);
    setActiveSession(this.id, 0, 100, 100, '');
    await this.gameField.enemyWin();
    !this.isEffectsMuted && document.querySelector('#hero-death-audio').play();
    this.openEndGameModal();
  }

}
