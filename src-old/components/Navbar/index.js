import React from "react";
import {
  ProductList,
  Nav,
  NavLink,
  Bars,
  NavIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarContainer,
} from "./NavbarElements";
import { Consumer } from "../products/content";
import { soon } from "../../data/ProductData/soon";
const Navbar = () => {
  return (
    <NavBarContainer>
      <Nav>
        <NavMenu>
          <NavLink to="/payment" activeStyle>
            Mua vé
          </NavLink>
          <div style={{borderLeft:'groove', borderWeight:'1px', marginTop:'1px', padding:'5px 5px', color:'#C4A484', height:'40px', alignSelf:'center'}}></div> 
          <NavLink to="/movie" activeStyle>
            Phim
          </NavLink>
          <div style={{borderLeft:'groove', borderWeight:'1px', marginTop:'1px', padding:'5px 5px', color:'#C4A484', height:'40px', alignSelf:'center'}}></div> 
          <NavLink to="/theaters" activeStyle>
            Cụm rạp
          </NavLink>
          <div style={{borderLeft:'groove', borderWeight:'1px', marginTop:'1px', padding:'5px 5px', color:'#C4A484', height:'40px', alignSelf:'center'}}></div> 
          <NavLink to="/member" activeStyle>
            Thành viên
          </NavLink>
          <div style={{borderLeft:'groove', borderWeight:'1px', marginTop:'1px', padding:'5px 5px', color:'#C4A484', height:'40px', alignSelf:'center'}}></div> 
          <NavLink to="/redeem" activeStyle>
            Đổi quà
          </NavLink>
        </NavMenu>
      </Nav>
    </NavBarContainer>
  );
};

export default Navbar;
