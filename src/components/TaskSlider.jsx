import React from 'react';
import Slider from 'react-slick';

const images = require.context('../assets/images/help/tasks', true);
const imagePath = (name) => images(name, true);

const TaskSlider = (props) => {
  return (
    <Slider {...props.settings}>
      {Array.from({length: 9}).map((_, index) => (
        <div key={index + 1}>
          <img className="image-slider" src={imagePath(`./task${index + 1}.png`)} alt={`task ${index + 1}`} />
        </div>
      ))
      }
    </Slider>
  );

}

export default TaskSlider;