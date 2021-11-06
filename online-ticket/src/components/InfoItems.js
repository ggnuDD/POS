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
                    <td style={{borderLeft: "none"}}>Tên chi nhánh</td>
                    <td style={{borderLeft: "none"}}>Số rạp</td>
                    <td style={{borderLeft: "none"}}>Số ghế (left/total)</td>
                    <td style={{borderLeft: "none"}}>Khung giờ chiếu</td>
                    <td style={{border: "none"}}></td>
                </tr>
              </tbody>
            </table>
        )
    } 
}

   
export default InfoItems