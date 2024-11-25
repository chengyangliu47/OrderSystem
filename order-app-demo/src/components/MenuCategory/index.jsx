import React, { useState } from 'react';
import './style.less';

const MenuCategory = ({ categories, addToCart }) => {
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

  return (
    <div className="category-product-list">
      {/* 分类选择按钮 */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-button ${
              activeCategory === category.name ? 'active' : ''
            }`}
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

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
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
