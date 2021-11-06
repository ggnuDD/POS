import React from 'react'

const Header = () => {
    const headerStyle ={
        background: 'white',
        color: '#C4A484',
        textAlign: 'center',
        padding: '  10px',
        fontFamily: 'Courier New',
        borderBottom: 'bold',
        borderWidth: '5px'
    }

    //<h1>Thực đơn</h1>
    return ( 
    <header style={headerStyle}>
        <img src={"https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.15752-9/249256387_372992894553725_4491604262772104861_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=oGGPkjliv9cAX8C50jy&_nc_ht=scontent.fsgn8-1.fna&oh=4d4f46760e7151c7961467e7e9ed2fb8&oe=61AA22D5"} width="90" height="90" />
    </header>
    )
}

export default Header