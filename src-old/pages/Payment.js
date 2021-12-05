import { CenterFocusStrong } from '@material-ui/icons';
import React, {Fragment} from 'react'
import {Link} from "react-router-dom";
import Info from '../components/Info';
import SeatHandler from "../components/seatPicker/MovieSeatPicker";
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './ProductStyle/ProductListStyle.css'

export default function Payment() {
  const [selected, setSelected] = React.useState([]);
  const headerStyle ={
    background: 'white',
    color: '#C4A484',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Courier New',
    borderBottom: 'bold',
    borderWidth: '5px'
}
  return (
    <div>
      <div className="App">
        <table>
                <tbody>
                  <tr>
                      <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px', width: '300px'}}>Cinema Thủ Đức</td>
                      <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px', width: '300px'}}>Rạp 1</td>
                      <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px', width: '300px'}}>18h30 - 20h</td>
                      <td style={{borderLeft: "none", fontWeight:'bold', fontSize: '20px', width: '300px'}}>
                      <input id="inputID" type="text" placeholder="Số ghế" style={{fontFamily: 'inherit',
                        textDecoration: 'none', backgroundColor:'transparent', border: 'none', transform: 'none',
                        textAlign: 'center', alignSelf: 'center'}} value={selected.toString()}/> 
                      </td>
                      <td style={{border: "none", fontWeight:'bold', fontSize: '20px'}}></td>
                  </tr>
                </tbody>
        </table>
        <div style={{backgroundImage: "url(" + 'https://www.lottecinemavn.com/LCHS/Image/Bg/bg_screen.gif' + ")", 
                    height: '60px',width: '600px', display: 'flex',  justifyContent:'center', alignItems:'center',
                    fontSize: '40px'
                    }}>Screen</div>
        <SeatHandler setSelected={setSelected}/>
        {console.log(selected.length)}
        <div className="footer">
          <button class="ui icon button" style={{background: 'transparent', fontSize: '50px', marginRight: '-1000px'}}><i class="fa fa-arrow-right"></i></button>
        </div>
      </div>
  </div>
  );
}