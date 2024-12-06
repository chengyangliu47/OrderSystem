import React, { useState, useEffect } from "react";
import './style.less';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

export default function FixedCart({ cartItems, totalAmount, clearCart }) {
  const [open, setOpen] = useState(false);
  const [tax, setTax] = useState(totalAmount * 0.13);
  const [tip, setTip] = useState(0);

  const total = totalAmount + tax + tip;

  useEffect(() => {
    setTax(totalAmount * 0.13);
  }, [totalAmount]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Fixed Cart Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#f8f8f8',
          border: '1px solid #ccc',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
        onClick={handleOpen}
      >
        <ShoppingCartIcon />
        <div style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '12px', color: '#000' }}>
          ${totalAmount.toFixed(2)}
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <Box sx={style}>
          <Typography id="cart-modal-title" variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <Typography id="cart-modal-description" sx={{ mt: 2 }}>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <hr />
            <div>
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <th>Subtotal:</th>
                    <td>${totalAmount.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Tax:</th>
                    <td>${tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Tip:</th>
                    <td>${tip.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Total:</th>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <ButtonGroup>
                <Button onClick={() => setTip(0)}>No Tip</Button>
                <Button onClick={() => setTip(2)}>$2.00</Button>
                <Button onClick={() => setTip(5)}>$5.00</Button>
              </ButtonGroup>
              <hr />
              <TextField
                label="Delivery Notes"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  alert('Order Placed!');
                  clearCart();
                  handleClose();
                }}
              >
                Place Order
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
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
