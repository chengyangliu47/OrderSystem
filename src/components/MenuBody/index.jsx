import React from "react";
import MenuSearchBar from "../MenuSearchBar"
import MenuCategory from "../MenuCategory"
import './style.less'


const MenuBody = () => {
    return(
        <div className="menu-container">
            <div >Full Menu</div>
            <MenuSearchBar className="menu-search"/>
            <MenuCategory className="menu-category"/>
        </div>
    )
}

export default MenuBody