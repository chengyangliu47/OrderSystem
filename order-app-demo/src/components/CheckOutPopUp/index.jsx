import React, { useState } from 'react';
import './style.less';

const CheckOutPopUp = ({ totalAmount, onClose }) => {
  const [tip, setTip] = useState(0);
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleTipChange = (e) => {
    setTip(parseFloat(e.target.value) || 0);
  };

  const finalAmount = totalAmount + tip;

  return (
    <div className="payment-modal">
      <div className="payment-modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>Payment</h2>
        
        <hr />

        {/* 地图定位 */}
        <div className="section">
          <h4>Location</h4>
          <div className="map-placeholder">
            <p>Map Placeholder</p>
          </div>
          <p className="address">123 Main Street, City, Country</p>
        </div>

        <hr />

        {/* 电话 */}
        <div className="section">
          <h4>Contact</h4>
          <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>

        <hr />

        {/* 支付方式 */}
        <div className="section">
          <h4>Payment Method</h4>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash">Cash</option>
          </select>
        </div>

        <hr />

        {/* 费用计算 */}
        <div className="section">
          <h4>Summary</h4>
          <p>Subtotal: ${totalAmount.toFixed(2)}</p>
          <p>Tip: ${tip.toFixed(2)}</p>
          <p><strong>Total: ${finalAmount.toFixed(2)}</strong></p>
        </div>

        <hr />

        {/* 添加小费 */}
        <div className="section">
          <h4>Add Tip</h4>
          <input
            type="number"
            placeholder="Enter tip amount"
            value={tip}
            onChange={handleTipChange}
          />
        </div>

        <hr />

        {/* 添加备注 */}
        <div className="section">
          <h4>Add Note</h4>
          <textarea
            placeholder="Enter your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <hr />

        {/* 确认支付按钮 */}
        <button className="confirm-payment-button" onClick={onClose}>
          Confirm and Pay
        </button>
      </div>
    </div>
  );
};

export default CheckOutPopUp;
