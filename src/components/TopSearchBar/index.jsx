import React, { useEffect, useState } from "react";
import './style.less'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import map1 from "../../assets/map1.jpg"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';


export default function TopSearchBar({cartItems,totalAmount,clearCart}) {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //const [subTotal, setSubTotal] = useState(totalAmount);
  const [tax, setTax] = useState(totalAmount*0.13);
  const [tip, setTip] = useState(0);
  const total= (totalAmount+tax+tip);

  
  useEffect(()=>{
    setTax(totalAmount*0.13);
  },[totalAmount]);
  




  return (
    <div class="menu-search-header">
        
        <IconButton className="top-header-left" type="button" sx={{ p: '10px',fontSize:20, }} >
            <LocationOnIcon />Miami
        </IconButton>
        <Paper
        className="top-header-mid"
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >    
        <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Restaurant"
            inputProps={{ 'aria-label': 'Search Restaurant' }}
        />
        </Paper>
            <IconButton onClick={handleOpen} className="top-header-right" type="button" sx={{ p: '10px' }} >
                <ShoppingCartIcon />
                ${totalAmount?totalAmount:'0.00'}
            </IconButton>

            
      <Modal
        className="cart-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Shopping Cart
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul className="check-out-list">
              <li className="check-out-map">
                <img src={map1}></img>
                <hr/>
              </li>
              <li className="check-out-delivery-time" >
                <h2>
                  <AccessTimeIcon/>
                  Delivery Time
                </h2>
                <body className="check-out-delivery-time-body"> 19-29 min</body>
                <hr/>
              </li>
              <li className="check-out-address">
                <body>
                  <HomeIcon />
                  30 Murray Ave Port
                </body>
                <body>
                    &nbsp; &nbsp; &nbsp;Washington, NY11050, USA
                </body>
              </li>
              <hr/>
              <li className="check-out-phone">
                <body>
                  <LocalPhoneIcon/>
                    &nbsp; (646)821-7556
                </body>
                <hr/>
              </li>
              <li className="check-out-payment">
                <body>
                  <CreditCardIcon/>
                  &nbsp;Payment
                </body>
                <hr/>
              </li>
              <li className="check-out-summary">
                <table style={{width:"100%"}}>
                  <tr>
                    <th>Subtotal:</th>
                    <td>${totalAmount}</td>
                  </tr>
                  <tr>
                    <th>Delivery Fee:</th>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <th >Tax:</th>
                    <td>${tax}</td>
                  </tr>
                  <tr>
                    <th>Tip:</th>
                    <td>${tip}</td>
                  </tr>
                  </table>
                  <hr/>
                  <table style={{width:"100%"}}>
                  <tr>
                    <th>Total:</th>
                    <td>${total}</td>
                  </tr>
                </table>
              </li>
              
              <hr/>
              <li className="check-out-tip" >
                <body>
                  <h2>Tip</h2>
                  <ButtonGroup>
                    <button onClick={()=> setTip(0)} >No Tip</button>
                    <button onClick={()=> setTip(2)} >$2.0</button>
                    <button onClick={()=> setTip(3)}>$3.0</button>
                    <button onClick={()=> setTip(4)}>$4.0</button>
                    <button>other</button>
                  </ButtonGroup>
                </body>
              </li>
              
              <hr/>
              <li className="check-out-notes">
                <TextField
                  id="outlined-helperText"
                  label="Delivery Notes"
                  multiline
                  rows={4}
                />
              </li>
              
              <hr/>
              <li  >
                <Button  className="check-out-place-order" variant="contained">Place Order</Button>
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
            
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