import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss"
import { featured } from "../../data/HomePage/Feature";

class Featured extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { dataList: featured };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  dataList() {
    return this.state.dataList.map(data => {
      return (
          <div key={data}>
              <img alt="featuring" src={data.img} style={{height: '420px', width: '100%'}} />
          </div>
      )
    });
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
          {this.dataList()}
        </Slider>
        </div>   
      </div>  
) } }
 export default Featured;