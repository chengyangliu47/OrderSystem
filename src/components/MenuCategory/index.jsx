import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import './style.less'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Sizes } from '@glidejs/glide/dist/glide.modular.esm';

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


  //dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };


  
  return (
    <div className='menu-category'>
        <div className="main-search-header" alignItems='spaceBetween' >
          <div className='store-name' sx={{mr:'50px'}}>
            <h1>Mcdonald</h1>
          </div>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'left', width: 400 }}
            style={{ backgroundColor: '#f0f0f0' }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1, left: 0 }}
                placeholder="Search Items"
                inputProps={{ 'aria-label': 'Search Items' }}
                value={inputText}
                onChange={inputHandler}

            />
            <IconButton type="button" sx={{ p: '10px', color:'black' }} aria-label="search">
                <SearchIcon />
            </IconButton>
          </Paper>

        </div> 
        
        <div className='menu-body-panel' style={{marginTop:'20px',}}>
        <div className='menu-body-left-panel'>
          <div className='store-info'>Store Address</div>
          <hr/>
          <div className='menu-category-selection'>
            {/* 分类选择按钮 */}
            <Box sx={{ width: 500, display:'grid' }}>
                <BottomNavigation
                id="menu-nav"
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

              </div>
              </div>
              <div className='menu-body-right-panel'>
      {/* 产品展示 */}
        <div className="category-product-list" >
      {categories
        .filter((category) => category.name === activeCategory)
        .map((category) => (
          <div key={category.name} className="category-section" >  
            <h2 className="category-title">{/*类别名称category.name*/}</h2>
            <div className="products" style={{display:'ruby'}}>
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleClickOpen (product)}
                  style={{zoom:'70%'}}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  /><IconButton
                  onClick={(e) => {
                    e.stopPropagation(); // 防止触发卡片点击事件
                    addToCart(product);
                    console.log(cartItems)
                  }}
                  className="add-to-cart-button"
                >
                  
                  <AddCircleOutlineOutlinedIcon/>
                </IconButton>
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>${product.price.toFixed(2)}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* 商品详情弹窗 */}
      {selectedProduct && (
        <div className="modal" >
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        <IconButton
          onClick={() => {
            addToCart(selectedProduct);
          }}
          className="add-to-cart-modal-button"
        >
           <AddCircleOutlineOutlinedIcon/>
        </IconButton>Add to Cart
        </Box>
      </Modal>
          </div>)}
      </div>
        </div> 
        </div>
        </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};