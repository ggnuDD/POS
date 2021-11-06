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
import { productList } from "../../data/ProductData/soon";
const Navbar = () => {
  return (
    <NavBarContainer>
      <Nav>
        <NavMenu>
          <NavLink to="/ticket" activeStyle>
            Mua vé
          </NavLink>
          <div style={{borderLeft:'groove', borderWeight:'1px', marginTop:'1px', padding:'5px 5px', color:'#C4A484', height:'40px', alignSelf:'center'}}></div> 
          <NavLink to="/movie" activeStyle>
            Phim
          </NavLink>
          <div style={{borderLeft:'groove', borderWeight:'1px', marginTop:'1px', padding:'5px 5px', color:'#C4A484', height:'40px', alignSelf:'center'}}></div> 
          <Consumer>
          {value => (<NavLink to="/theaters" onClick={() => {value.setProducts(productList);value.setTitle("Sản phẩm")}} activeStyle>
            Cụm rạp
          </NavLink>)}
          </Consumer>
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
