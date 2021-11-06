import React, {Fragment} from 'react'
import InfoItems from './InfoItems'
import './style.css'
import FoodHeader from './FoodHeader'
import Navbar from './Navbar'

const Info = () => {
    const headerStyle ={
        background: '#C4A484',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        fontFamily: 'Courier New'
    }
    const seat = require('./../assets/images/seat.jpg')

    return (
        <Fragment>
          <InfoItems/>
          <img src={
            "https://lavrton.com/case-study-seat-reservation-widget-sample-d68562233b3b5729ad113cc660dc16bb.png"}
            alt="cur"
            className='center'
          />
        <FoodHeader />
        </Fragment> 
        )
}

export default Info