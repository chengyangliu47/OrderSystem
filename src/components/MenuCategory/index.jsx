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
import EditableStoreInfo from '../EditableStoreInfo'
import AddToWishlist from '../AddToWishlist';

export default function MenuCategory({categories, addToCart, clearCart, cartItems, totalAmount}) {
  const [value, setValue] = React.useState(0);


  const [inputText, setInputText] = useState("");

  const [activeCategory, setActiveCategory] = useState(categories[0]?.name || '');

  const [searchText, setSearchText] = useState(''); 


  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase()); // Added: Update search text state
  };

  // Added: Filter products based on search text and active category
  const filteredProducts = categories
    .find((category) => category.name === activeCategory)
    ?.products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    ) || [];
    
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
                value={searchText}
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'Search Items' }}

            />
            <IconButton type="button" sx={{ p: '10px', color:'black' }} aria-label="search">
                <SearchIcon />
            </IconButton>
          </Paper>

        </div> 
        
        <div className='menu-body-panel' style={{marginTop:'20px',}}>
        <div className='menu-body-left-panel'>
          <div className='store-info' style={{marginRight:'10px'}}>
            <EditableStoreInfo></EditableStoreInfo>
          </div>
          <hr/>
          <div className='menu-category-selection'>
            {/* 分类选择按钮 */}
            <Box sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'flex-start',
                      flexDirection: 'column', // Stack items vertically
                    }}>
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
            <div className="category-product-list"  style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {filteredProducts.length > 0 ? ( // Modified: Display filtered products
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card" >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    style={{zoom:'70%'}}
                  />
                    <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>${product.price.toFixed(2)}</p>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); // 防止触发卡片点击事件
                      addToCart(product);
                      console.log(cartItems)
                    }}
                    className="add-to-cart-button"
                  >
                    
                    <AddCircleOutlineOutlinedIcon/>
                  </IconButton>
                  </div>
    </div>
  ))
) : (
  <p>No products found.</p> // Added: Handle case when no products match the search
)}






      {/* 商品详情弹窗 */}
      {selectedProduct && (
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

            {/* 必选项 */}
            <div className="product-options">
              <h3>Required</h3>
              <label>
                size:
                <select required>
                  <option  value="Small">Small</option>
                  <option  value="Medium">Medium</option>
                  <option  value="Large">Large</option>
                </select>
              </label>
              <label>
                material:
                <select required>
                  <option value="cotton">Cotton</option>
                  <option value="polyester">Polyester</option>
                  <option value="silk">Silk</option>
                </select>
              </label>
            </div>

            {/* 可选项 */}
            <div className="product-options">
              <h3>Optional</h3>
              <label>
                Type:
                <select>
                  <option value="">none</option>
                  <option value="embroidery">Embroidery</option>
                  <option value="print">Print</option>
                </select>
              </label>
              <label>
              Package:
                <select>
                  <option value="">none</option>
                  <option value="gift-wrap">Gift Wrap</option>
                  <option value="basic-wrap">Basic Wrap</option>
                </select>
              </label>
            </div>

            {/* 定制项 */}
            <div className="product-customization">
              <h3>Note</h3>
              <label>
                <input
                  type="text"
                  placeholder="note"
                  maxLength={30}
                />
              </label>
            </div>

            {/* 添加到购物车 */}
            <IconButton
              onClick={() => {
                addToCart(selectedProduct);
              }}
              className="add-to-cart-modal-button"
            >
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
            Add to Cart
          </Box>
        </Modal>
      )}

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