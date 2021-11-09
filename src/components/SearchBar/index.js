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
            <LogoName>Cinema</LogoName>
            <ShopLogo>
                <img src={"https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.15752-9/249256387_372992894553725_4491604262772104861_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=oGGPkjliv9cAX8C50jy&_nc_ht=scontent.fsgn8-1.fna&oh=4d4f46760e7151c7961467e7e9ed2fb8&oe=61AA22D5"} width="30" height="30" float="left"/>
            </ShopLogo>
          </NavLogo>
        </Logo>
        <SearchNav>
          <SearchInput
            type="text"
            placeholder="Tìm phim đang chiếu"
          ></SearchInput>
          <SearchBtn type="button" onclick={click}>
            <NavIcon className="fas fa-search"></NavIcon>
          </SearchBtn>
        </SearchNav>
        <NavMenu>
          <NavLink to="/login" style={{textDecoration: 'none'}}>
            <NavIcon className="fas fa-phone-alt"></NavIcon>
            <NavLinkText>Đăng nhập</NavLinkText>
          </NavLink>
          <NavLink to="/cart">
            <NavIcon className="fas fa-shopping-cart"></NavIcon>
          </NavLink>
        </NavMenu>
      </Nav>
    </SearchBarContainer>
  );
};

export default SearchBar;
