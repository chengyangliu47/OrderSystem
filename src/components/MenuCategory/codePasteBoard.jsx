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



<div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleClickOpen (product)}
                >
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