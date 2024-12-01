import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
import './style.less'

export default function MenuCategory({categories, addToCart, clearCart, cartItems, totalAmount}) {
  const [value, setValue] = React.useState(0);

  const [inputText, setInputText] = useState("");

  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || '');

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const inputHandler = () =>{
    setInputText(inputText)
    for(let category = null;category in categories;){
      if(inputText==category.name){
        setActiveCategory(inputText)
      }
    }
  };

  return (
    <div className='menu-category'>
        <div className="menu-search-header">
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'left', width: 400 }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1, left: 0 }}
                placeholder="Search Items"
                inputProps={{ 'aria-label': 'Search Items' }}
                value={inputText}
                onChange={inputHandler}

            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
          </Paper>
        </div> 


        <div>
        <div className="category-product-list">


            {/* 分类选择按钮 */}
          <Box sx={{ width: 500 }}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}>
        {categories.map((category) => (
          <BottomNavigationAction
            key={category.name}
            className={`category-button ${
              activeCategory === category.name ? 'active' : ''
            }`}
            label={category.name}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </BottomNavigationAction>
          
        ))}
          </BottomNavigation>
          </Box>


      {/* 产品展示 */}
      {categories
        .filter((category) => category.name === activeCategory)
        .map((category) => (
          <div key={category.name} className="category-section">
            <h2 className="category-title">{category.name}</h2>
            <div className="products">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>${product.price.toFixed(2)}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // 防止触发卡片点击事件
                        addToCart(product);
                        console.log(cartItems)
                      }}
                      className="add-to-cart-button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* 商品详情弹窗 */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              ✖
            </button>
            <h2>{selectedProduct.name}</h2>
            <p>Price: ${selectedProduct.price.toFixed(2)}</p>
            <p>Description: {selectedProduct.description}</p>
            <div className="product-options">
              <label>
                Size:
                <select>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </label>
            </div>
            <button
              onClick={() => {
                addToCart(selectedProduct);
                handleCloseModal();
              }}
              className="add-to-cart-modal-button"
            >
              Add to Cart
            </button>
            </div>
          </div>)}
      </div>
        </div>
    </div>    
  );
}