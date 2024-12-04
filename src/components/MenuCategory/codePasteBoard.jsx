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