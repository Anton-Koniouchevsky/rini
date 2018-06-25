import GameField from "./animations/GameField";
import { getName } from "../utils/nameGenerator";
import { setActiveSession, setResult } from '../store/firebase/database';
import { generateDeviation, generateBoolean } from '../utils/randomFunctions';
import { gameControllerConfig as config} from './configs/config';

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
    this.greetings();
  }

  toggleEffects = (isEffectsMuted) => {
    this.isEffectsMuted = isEffectsMuted;
  }

  playEffect = (effect) => {
    if(!this.isEffectsMuted) {
      document.querySelector(`#${effect}`).play();
    }
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
    this.playEffect('hero-spell-use-audio');
    if(spellType === 'hill') {
      await this.gameField.heroAttack(spellType, false);
      if(isRight) {
        const heroHill = generateDeviation(config.hero.baseHill, config.hero.deviation);
        this.heroHP = this.heroHP + heroHill > 100 ? 100 : this.heroHP + heroHill;
        await this.gameField.changeHeroHP(this.heroHP);
      } else {
        this.playEffect('attack-miss-audio');
        await this.gameField.drawMessage('Не удалось!');
      }
    } else {
      await this.gameField.heroAttack(spellType, isRight);
      if(isRight) {
        this.playEffect('hero-attack-success-audio');
        const heroDamage = generateDeviation(config.hero.baseDamage, config.hero.deviation);
        this.enemyHP = this.enemyHP - heroDamage > 0 ? this.enemyHP - heroDamage : 0;
        await this.gameField.changeEnemyHP(this.enemyHP);
      } else {
        this.playEffect('attack-miss-audio');
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
    const isSuccessful = generateBoolean();
    this.playEffect('enemy-spell-use-audio');
    await this.gameField.enemyAttack(isSuccessful);
    if(isSuccessful) {
      this.playEffect('enemy-attack-success-audio');
      const enemyDamage = generateDeviation(config.enemy.baseDamage, config.enemy.deviation) + this.level;
      this.heroHP = this.heroHP - enemyDamage > 0 ? this.heroHP - enemyDamage : 0;
      await this.gameField.changeHeroHP(this.heroHP);
    } else {
      this.playEffect('attack-miss-audio');
      await this.gameField.drawMessage('Промах!');
    }
    if(this.heroHP === 0) {
      this.enemyWin();
    } else {
      this.heroTurn();
    }    
  }

  heroWin = async () => {
    this.playEffect('hero-win-audio');
    await this.gameField.heroWin();
    this.level++;
    this.enemyHP = config.maxHP;
    this.enemyName = getName();
    this.gameField.setUnitsInfo( 
      { heroName: this.heroName, heroHP: this.heroHP }, 
      { enemyName: this.enemyName, enemyHP: this.enemyHP },
    );
    this.greetings();
  }

  enemyWin = async () => {
    setResult(this.id, this.heroName, this.level);
    setActiveSession(this.id);
    await this.gameField.enemyWin();
    this.playEffect('hero-death-audio');
    this.openEndGameModal();
  }

}
