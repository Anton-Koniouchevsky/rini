import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const images = require.context('../assets/images/help', true);
const imagePath = (name) => images(name, true);

class GameStatesSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'sample',
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="image-slider" src={imagePath(`./spells.png`)} alt="spells" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./attack.png`)} alt="attack" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./win.png`)} alt="win" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./loose.png`)} alt="loose" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./loose2.png`)} alt="loose" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./highscore.png`)} alt="highscore" />
        </div>
      </Slider>
    );
  }
}

export default GameStatesSlider;