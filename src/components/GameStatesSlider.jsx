import React from 'react';
import Slider from 'react-slick';

const images = require.context('../assets/images/help/states', true);
const imagePath = (name) => images(name, true);

const GameStatesSlider = (props) => {
  return (
    <Slider {...props.settings}>
      {Array.from({length: 6}).map((_, index) => (
        <div key={index + 1}>
          <img className="image-slider" src={imagePath(`./state${index + 1}.png`)} alt={`state ${index + 1}`} />
        </div>
      ))
      }
    </Slider>
  );

}

export default GameStatesSlider;