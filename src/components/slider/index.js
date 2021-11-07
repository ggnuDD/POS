import React , { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss"

class Featured extends React.Component
{
  
  render()
  { 
    let settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 2,
           
    };
    return (
      <div className="section-featured">
        <div style={{marginLeft:'20px'}}>     
        <Slider {...settings}>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster-tthm-rerun_1__1.jpg"
                to="/payment"
                style={{height:"395px", width:'95%'}}/>
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/s/b/sbm2-main-poster-01_1_1__1.jpg"
                style={{height:"395px",  width:'95%'}}
            />
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/f/f/ff9-fast-furious-9-cgv-poster_1.jpg"
                style={{height:"395px",  width:'94%'}}
            />
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/b/l/black_widow_-_final_poster_1__1.jpg"
                style={{height:"395px", width:'95%'}}
            />
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster_shangchi_1.jpg"
                style={{height:"395px"}}/>
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/v/n/vn_mlgnt_vert_tsr_2764x4096_1__1.jpg"
                style={{height:"395px"}}
            />
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster_venom_121121_1__1.jpg"
                style={{height:"395px", width:'95%'}}
            />
            </div>
            <div>
            <img 
                src="https://www.cgv.vn/media/catalog/product/cache/1/small_image/190x260/052b7e4a4f6d2886829431e534ef7a43/p/o/poster_v_ng_t_c_m_l_ng_-_19.11.2021_1__1.jpg"
                style={{height:"395px"}}
            />
            </div>
          </Slider>
        </div>   
      </div>  
) } }
 export default Featured;