import React, {Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

//const InfoItems = props => {


const infoBarStyle = {
    background: 'red',
    color: '#ffff',
    border: 'solid',
    borderWidth: '0.5px',
    borderColor: 'black',
    padding: '8px 10px',
    cursor: 'pointer',
    float: 'left',
    display: 'block'
}

class InfoItems extends Component{
    render() {
        return (
            <table>
              <tbody>
                <tr>
                    <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px'}}>Cinema Thủ Đức</td>
                    <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px'}}>Rạp 1</td>
                    <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px'}}>Ghế 5 (120/133)</td>
                    <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px'}}>18h30 - 20h</td>
                    <td style={{border: "none", fontWeight:'bold', fontSize: '20px'}}></td>
                </tr>
              </tbody>
            </table>
        )
    } 
}

   
export default InfoItems