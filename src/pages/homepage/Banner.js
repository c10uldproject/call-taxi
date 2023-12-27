import React from 'react';
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';
import { car1, car2, car3 } from '../../assets/images/Image';
import Form from './Form';

function Banner() {
  return (
    <>
     <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <div classNameName='container-fluid'>
                <div classNameName='row'>
                    <div classNameName='col-lg'>
                    <img src={car1} className="img-fluid image-s" alt="..."/>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div classNameName='container-fluid'>
                <div classNameName='row'>
                    <div classNameName='col-lg'>
                    <img src={car2} className="img-fluid image-s" alt="..."/>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div classNameName='container-fluid'>
                <div classNameName='row'>
                    <div classNameName='col-lg'>
                    <img src={car3} className="img-fluid image-s" alt="..."/>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    </Carousel> 
    <Form/>
    </>
  )
}

export default Banner;