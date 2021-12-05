import React from "react";
import {
  Logo,
  LogoName,
  ShopLogo,
  Nav,
  NavLogo,
  NavLink,
  NavIcon,
  NavMenu,
  NavLinkText,
  SearchNav,
  SearchBtn,
  SearchInput,
  SearchBarContainer,
} from "./SearchBarElements";

function click() {
  alert("Oops");
}

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Nav>
        <Logo>
          <NavLogo to="/home" style={{textDecoration: 'none'}}>
            <LogoName style={{marginTop: '2px'}}>Cinema</LogoName>
            <ShopLogo>
                <img src={"https://i.imgur.com/0qMisZH.png"}
                width="30" height="30"/>
            </ShopLogo>
          </NavLogo>
        </Logo>
        <SearchNav>
          <SearchInput
            type="text"
            placeholder="Tìm phim đang chiếu"
          ></SearchInput>
          <SearchBtn type="button" onclick={click}>
          </SearchBtn>
        </SearchNav>
        <NavMenu>
          <NavLink to="/login" style={{textDecoration: 'none'}}>
            <NavIcon className="fas fa-phone-alt"></NavIcon>
            <NavLinkText>Đăng nhập</NavLinkText>
          </NavLink>
        </NavMenu>
      </Nav>
    </SearchBarContainer>
  );
};

export default SearchBar;
