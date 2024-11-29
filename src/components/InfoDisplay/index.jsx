import React, { useState } from 'react';
import "./style.less";


const InfoDispay = () => {
  // State for order type
  const [orderType, setOrderType] = useState('Delivery');

  // Shop information
  const shopData = {
    name: 'Eastern Restaurant',
    rating: 4.8,
    reviews: 120,
    distance: '1.4mi',
    deliveryTime: '20-35min',
    priceRange: '$$',
    isOpen: true,
    closingTime: '9:55 PM',
    deliveryFeePromo: 'Delivery $0',
    address: '30 Allen Street, New York, NY, 10002',
    phone: '(917) 855-2288',
  };

  // Dynamic content based on order type
  const menuContent =
    orderType === 'Delivery'
      ? 'Delivery Menu Content'
      : 'Pickup Menu Content';

  const handleOrderTypeChange = (type) => {
    setOrderType(type);
  };

  const handleAddressClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        shopData.address
      )}`,
      '_blank'
    );
  };

  const handlePhoneClick = () => {
    window.open(`tel:${shopData.phone}`, '_self');
  };

  return (
    <div className="shop-info-container">
      {/* 商家信息 */}
      <div className="shop-basic-info">
        <h1 className="shop-name">{shopData.name}</h1>
        <p className="shop-rating">
          Rating: {shopData.rating}/5 ({shopData.reviews} reviews)
        </p>
        <p className="shop-distance">
          Distance: {shopData.distance} | Delivery Time: {shopData.deliveryTime}
        </p>
        <p className="shop-price">Price Range: {shopData.priceRange}</p>
        <p className="shop-status">
          {shopData.isOpen ? 'Opening now' : 'Closed'} (Closes at{' '}
          {shopData.closingTime})
        </p>
        <p className="delivery-promo">{shopData.deliveryFeePromo}</p>
      </div>

      {/* 订单类型选择 */}
      <div className="order-type">
        <button
          className={`order-btn ${
            orderType === 'Delivery' ? 'active' : ''
          }`}
          onClick={() => handleOrderTypeChange('Delivery')}
        >
          Delivery
        </button>
        <button
          className={`order-btn ${
            orderType === 'Pickup' ? 'active' : ''
          }`}
          onClick={() => handleOrderTypeChange('Pickup')}
        >
          Pickup
        </button>
        <p className="menu-content">{menuContent}</p>
      </div>

      {/* 商家详细信息 */}
      <div className="shop-details">
        <p className="shop-address">
          Address:{' '}
          <span onClick={handleAddressClick} className="clickable">
            {shopData.address}
          </span>
        </p>
        <p className="shop-phone">
          Phone:{' '}
          <span onClick={handlePhoneClick} className="clickable">
            {shopData.phone}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoDispay;