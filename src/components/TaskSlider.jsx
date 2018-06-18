import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const images = require.context('../assets/images/help/tasks', true);
const imagePath = (name) => images(name, true);

class TaskSlider extends React.Component {
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
          <img className="image-slider" src={imagePath(`./task1.png`)} alt="task1" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task2.png`)} alt="task2" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task3.png`)} alt="task3" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task4.png`)} alt="task4" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task5.png`)} alt="task5" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task6.png`)} alt="task6" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task7.png`)} alt="task7" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task8.png`)} alt="task8" />
        </div>
        <div>
          <img className="image-slider" src={imagePath(`./task9.png`)} alt="task9" />
        </div>
      </Slider>
    );
  }
}

export default TaskSlider;