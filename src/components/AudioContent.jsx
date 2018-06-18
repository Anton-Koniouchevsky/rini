import React from 'react';

const sounds = require.context('../assets/sounds', true);
const soundPath = (name) => sounds(name, true);

const AudioContent = () => (
  <div>
    <audio id="main-theme-audio" src={soundPath('./main-theme.mp3')} loop />
    <audio id="hero-attack-success-audio" src={soundPath('./hero-attack-success.mp3')} />
    <audio id="enemy-attack-success-audio" src={soundPath('./enemy-attack-success.mp3')} />
    <audio id="hero-death-audio" src={soundPath('./hero-death.mp3')} />
    <audio id="hero-spell-use-audio" src={soundPath('./hero-spell-use.mp3')} />
    <audio id="enemy-spell-use-audio" src={soundPath('./enemy-spell-use.mp3')} />
    <audio id="attack-miss-audio" src={soundPath('./attack-miss.mp3')} />
    <audio id="hero-win-audio" src={soundPath('./hero-win.mp3')} />
  </div>
);

export default AudioContent;