import React , { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss"

class Featured extends React.Component
{
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    }
  play() {
    this.slider.slickPlay();
    }
  pause() {
    this.slider.slickPause();
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
            autoplayspeed: 2000,
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
            <div>
            <img 
                src="https://media.lottecinemavn.com/Media/WebAdmin/b165bd1c32a04f44973c3d08552640ad.png"
                to="/payment"
                style={{height:"420px", width:'100%'}}/>
            </div>
            <div>
            <img 
                src="https://media.lottecinemavn.com/Media/WebAdmin/5993f44ecb8b4ac094fc247c0a43803f.jpg"
                style={{height:"420px",  width:'100%'}}
            />
            </div>
            <div>
            <img 
                src="https://media.lottecinemavn.com/Media/WebAdmin/d503d574995149699de9640cda275724.jpg"
                style={{height:"420px",  width:'100%'}}
            />
            </div>
            <div>
            <img 
                src="https://media.lottecinemavn.com/Media/WebAdmin/0dca13bf5c54429e95b9a8a0c648d087.png"
                style={{height:"420px", width:'100%'}}
            />
            </div>
          </Slider>
        </div>   
      </div>  
) } }
 export default Featured;