import React from 'react'

const Header = () => {
    const headerStyle ={
        background: 'white',
        color: '#C4A484',
        textAlign: 'center',
        padding: '10px',
        fontFamily: 'Courier New',
        borderBottom: 'bold',
        borderWidth: '5px'
    }

    //<h1>Thực đơn</h1>
    return ( 
    <header style={headerStyle}>
        <img src={"https://i.imgur.com/0qMisZH.png"} width="90" height="90" />
    </header>
    )
}

export default Header