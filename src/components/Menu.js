import React from "react";
import { MenuList } from "../DataMenu/MenuList";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItemData, key) => {
          return (
            <MenuItem
              image={menuItemData.image}
              name={menuItemData.name}
              price={menuItemData.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;