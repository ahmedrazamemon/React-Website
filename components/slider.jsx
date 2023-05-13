import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'
import image10 from './assets/10.jpg'
function Example() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        id='images'
          className="d-block w-100 h-20"
          src={image7}
          alt="First slide"
        />
           </Carousel.Item>
      <Carousel.Item>
        <img
        id='images'
          className="d-block w-100"
          src={image10}
          alt="Second slide"
        />

             </Carousel.Item>
      <Carousel.Item>
        <img
          id='images'
          className="d-block w-100"
          src={image8}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Example;