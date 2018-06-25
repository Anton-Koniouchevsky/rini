import React from 'react';
import { heroes } from '../game/configs/config';

import '../assets/images/preview-images.png';

const style = {
  width: '150px',
  height: '150px',
};

class HeroChoose extends React.Component {
  constructor(props) {
    super(props);
    this.state.index = heroes.indexOf(props.currentHero);
    this.setBackground(this.state.index);
  }
  state = {};

  getPrevHero = (event) => {
    event.preventDefault();
    const newIndex = this.state.index === 0 ? heroes.length - 1 : this.state.index - 1;
    this.setCurrentHero(newIndex);
  }

  getNextHero = (event) => {
    event.preventDefault();
    const newIndex = (this.state.index + 1) % heroes.length;
    this.setCurrentHero(newIndex);
  }

  setCurrentHero = (index) => {
    this.setBackground(index);
    this.setState(() => ({ index }));
    this.props.handleHeroChange(heroes[index]);
  }

  setBackground = (index) => {this.background = `url('../assets/images/preview-images.png') ${-150 * index}px 0`;}

  render = () => (
    <div className="user-form__hero">
      <h3>Персонаж</h3>
      <div className="user-form__hero-choose">
        <button onClick={this.getPrevHero} className="fa fa-angle-left button--primary button--round"></button>
        <div style={{...style, background: this.background}}></div>
        <button onClick={this.getNextHero} className="fa fa-angle-right button--primary button--round"></button>
      </div>
    </div>
  );

} 

export default HeroChoose;