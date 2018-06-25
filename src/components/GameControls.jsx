import React from 'react';

const GameControls = (props) => (
  <div className="game__controls">
    <button
      className={`game__control ${props.isPaused ? 'game__control--enabled' : ''}`}
      onClick={props.openSpellChoiceModal}
      disabled={!props.isPaused}
    >
      <i className="fa fa-3x fa-magic" aria-hidden="true"></i>
    </button>
    <button
      className={`game__control ${props.isSoundMuted ? '' : 'game__control--enabled'}`}
      onClick={props.toggleSound}
    >
      <i className="fa fa-3x fa-music" aria-hidden="true"></i>
    </button>
    <button
      className={`game__control ${props.isEffectsMuted ? '' : 'game__control--enabled'}`}
      onClick={props.toggleEffects}
    >
      <i className="fa fa-3x fa-bell" aria-hidden="true"></i>
    </button>
  </div>
);

export default GameControls;

