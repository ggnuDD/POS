import React , { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss"
import { movieArray } from "../../data/HomePage/Data";

class Featured extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {sliders:movieArray}
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    }
  play() {
    this.slider.slickPlay();
    }
  pause() {
    this.slider.slickPause();
  }
  
  sliders() {
    return this.state.sliders.map(data => {
        return (
            <div key={data}>
                <img alt="image" src={data.img} />
            </div>
        )
    });
  }
    
  render()
  { 
    let settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplayspeed: 1000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
            ]
    };
    return (
      <div className="section-featured">
        <div>     
        <Slider {...settings}>
            {this.sliders()}
        </Slider>
        </div>   
      </div>  
) } }
 export default Featured;