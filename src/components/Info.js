import React, {Fragment} from 'react'
import InfoItems from './InfoItems'
import './style.css'
import FoodHeader from './FoodHeader'
import Navbar from './Navbar'

const Info = () => {
    const seat = require('./../assets/images/seat.jpg')

    return (
        <Fragment>
          <InfoItems/>
          <div style={{height:'20px'}}></div>
          <img src={
            "https://lavrton.com/case-study-seat-reservation-widget-sample-d68562233b3b5729ad113cc660dc16bb.png"}
            alt="cur"
            className='center'
            style={{height:'80%', width:'80%'}}
          />
        <FoodHeader />
        </Fragment> 
        )
}

export default Info