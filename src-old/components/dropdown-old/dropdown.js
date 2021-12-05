import React, { useState } from "react";
import {
  ProductMenuDropdownContainer,
  ProductMenuTitle,
  ProductMenuTitleWrapper,
  MenuIcon,
  DropdownList,
  DropdownMenuItem,
  DropdownMenuItemLogo,
  ItemLink,
} from "./ProductDropdownElements";
import { showing } from "../../data/ProductData/showing";
import { soon } from "../../data/ProductData/soon";
import { Consumer } from "../../products/content";
  
const ProductDropdown = () => {
  return (
        <ProductMenuDropdownContainer>
      <DropdownList id="product-menu-dropdown">
        <DropdownMenuItem>
          <Consumer>
            {value =>
            (<ItemLink to="/movie" onClick={() => { value.setProducts(showing); value.setTitle("Đang chiếu") }}>
                Phim đang chiếu
            </ItemLink>
            )}
            </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
            {value =>
            (<ItemLink to="/movie" onClick={() => { value.setProducts(soon); value.setTitle("Sắp chiếu") }}>
                 Phim sắp chiếu
            </ItemLink>
            )}
          </Consumer>
        </DropdownMenuItem>
      </DropdownList>
      </ProductMenuDropdownContainer>
  );
};

export default ProductDropdown;
