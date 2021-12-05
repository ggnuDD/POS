import React from 'react'

const FoodHeader = () => {
    const headerStyle ={
        background: '#C4A484',
        color: 'black',
        textAlign: 'center',
        padding: '  1px',
        height: '70px',
        fontFamily: 'Courier New'
    }

    //
    return ( 
    <header style={headerStyle}>
        <h1>Đồ ăn</h1>
    </header>
    )
}

export default FoodHeader