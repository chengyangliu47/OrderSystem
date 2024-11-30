import React from "react";
import MenuCategory from "../MenuCategory"
import './style.less'


const MenuBody = ({categories, addToCart}) => {
    
    return(
        <div className="menu-container">
            <div >Full Menu</div>
            <MenuCategory categories={categories} className="menu-category"/>
        </div>
    )
}

export default MenuBody