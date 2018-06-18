import React from 'react';
import { connect } from 'react-redux';
import { mapCurrentUserToProps } from '../store/configureStore';
import SpellChoiceModal from './SpellChoiceModal';
import TaskModal from './TaskModal';
import EndGameModal from './EndGameModal';
import GameController from '../game/GameController';
import { getName } from '../utils/nameGenerator';
import LoadingStateComponent from './LoadingStateComponent';
import AudioContent from './AudioContent';

class Game extends React.Component {
  state = {
    isGameLoaded: false,
    showTaskModal: false,
    isSoundMuted: !this.props.currentUser.sound,
    isEffectsMuted: !this.props.currentUser.effects,
  };

  componentDidMount() {
    this.init(this.props.activeSession);
    this.mainTheme = document.querySelector('#main-theme-audio');
  }

  init = (activeSession) => {
    this.game = new GameController(
      this.props.currentUser,
      activeSession,
      this.openSpellChoiceModal,
      this.openEndGameModal,
      this.state.isEffectsMuted,
      this.setGameLoaded
    );
    !this.state.isSoundMuted && document.querySelector('#main-theme-audio').play();
  }

  setGameLoaded = () => {
    this.setState(() => ({ isGameLoaded: true }));
  }

  restart = () => {
    this.setState(() => ({
      showEndGameModal: false,
    }));
    this.init({
      level: 0,
      heroHP: 100,
      enemyHP: 100,
      enemyName: getName(),
    });
  }

  setSpellType = (spellType) => {
    this.mainTheme.pause();
    this.setState(() => ({
      showSpellChoiceModal: false,
      spellType,
      showTaskModal: true,
    }));
  }

  setTaskResult = (isRight) => {    
    !this.state.isSoundMuted && document.querySelector('#main-theme-audio').play();
    this.setState(() => ({ showTaskModal: false }));
    this.game.heroAttack(this.state.spellType, isRight);
  }

  openSpellChoiceModal = () => {
    this.setState(() => ({showSpellChoiceModal: true, isPaused: false, }));
  }

  openEndGameModal = () => {
    this.mainTheme.pause();
    this.setState(() => ({showEndGameModal: true, level: this.game.level }));
  }

  closeSpellChoiceModal = () => {
    this.setState(() => ({ showSpellChoiceModal: false, isPaused: true, }));
  }

  toggleSound = () => {
    this.mainTheme.paused ? this.mainTheme.play() : this.mainTheme.pause();
    this.setState(() => ({ isSoundMuted: !this.state.isSoundMuted, }));
  }

  toggleEffects = () => {
    this.game.toggleEffects(!this.state.isEffectsMuted);
    this.setState(() => ({ isEffectsMuted: !this.state.isEffectsMuted, }));
  }

  render = () => {
    return (
      <div className="game row-container row-container--game">
        <canvas className="game__field" id="game-field" width="800" height="650">
          Your browser doesn't support canvas. Please, use newer browser to play
        </canvas>
        <div className="game__controls">
          <button
            className={`game__control ${this.state.isPaused ? 'game__control--enabled' : ''}`}
            onClick={this.openSpellChoiceModal}
            disabled={!this.state.isPaused}
          >
            <i className="fa fa-3x fa-magic" aria-hidden="true"></i>
          </button>
          <button
            className={`game__control ${this.state.isSoundMuted ? '' : 'game__control--enabled'}`}
            onClick={this.toggleSound}
          >
            <i className="fa fa-3x fa-music" aria-hidden="true"></i>
          </button>
          <button
            className={`game__control ${this.state.isEffectsMuted ? '' : 'game__control--enabled'}`}
            onClick={this.toggleEffects}
          >
            <i className="fa fa-3x fa-bell" aria-hidden="true"></i>
          </button>
        </div>
        <SpellChoiceModal
          isOpen={this.state.showSpellChoiceModal}
          setSpellType={this.setSpellType}
          closeSpellChoiceModal={this.closeSpellChoiceModal}
        />
        <TaskModal
          isOpen={this.state.showTaskModal}
          setTaskResult={this.setTaskResult}
        />
        <EndGameModal
          isOpen={this.state.showEndGameModal}
          level={this.state.level}
          restart={this.restart}
        />
        {!this.state.isGameLoaded && <LoadingStateComponent />}
        <AudioContent />
      </div>
    );
  }
} 

export default connect(mapCurrentUserToProps)(Game);