import React from "react";
import MenuCategory from "../MenuCategory"
import './style.less'


const MenuBody = ({categories, addToCart, clearCart, cartItems, totalAmount}) => {
    
    return(
        <div className="menu-container">
            <div >Full Menu</div>
            <MenuCategory categories={categories} addToCart={addToCart} clearCart={clearCart} cartItems={cartItems} totalAmount={totalAmount} className="menu-category"/>
        </div>
    )
}

export default MenuBody