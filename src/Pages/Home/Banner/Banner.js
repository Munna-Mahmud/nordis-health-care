import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg'
import banner4 from '../../../images/banner/slide_1.jpg'


const Banner = () => {
  return (
    <div id="home" >
      <Carousel variant="dark" className="mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="mt-5">
            <h4 >Correct diagnosis is half the success</h4>
            <p>We try to make maximum use of all our experience, the <span  style={{color:"#30d2b9"}}>accumulated potential</span>, and  knowledge of modern <br /> 
            medicine.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner4}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4>We do our best for you and your health</h4>
            <p>We tried to make maximum use of all our experience, the <span style={{color:"#30d2b9"}}>accumulated</span> potential, the knowledge of modern medicine.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
};

export default Banner;