import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import AddToWishlist from '../AddToWishlist';

const EditableStoreInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [storeInfo, setStoreInfo] = useState({
    name: 'Awesome Store',
    address: '123 Main Street, City, Country',
    phone: '+123 456 7890',
  });
  const [tempStoreInfo, setTempStoreInfo] = useState({ ...storeInfo });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setTempStoreInfo({ ...storeInfo }); // Reset temporary data when toggling
  };

  const handleSave = () => {
    setStoreInfo({ ...tempStoreInfo });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempStoreInfo({ ...tempStoreInfo, [name]: value });
  };

  return (
    <Box sx={{ p: 2,  maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>
        Store Information
      </Typography>

      {isEditing ? (
        <>
          <TextField
            fullWidth
            margin="dense"
            label="Store Name"
            name="name"
            value={tempStoreInfo.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Address"
            name="address"
            value={tempStoreInfo.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone"
            name="phone"
            value={tempStoreInfo.phone}
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<CancelIcon />}
              onClick={handleEditToggle}
            >
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography>
            <strong>Name:</strong> {storeInfo.name}
          </Typography>
          <Typography>
            <strong>Address:</strong> {storeInfo.address}
          </Typography>
          <Typography>
            <strong>Phone:</strong> {storeInfo.phone}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            
          <AddToWishlist></AddToWishlist>
            <IconButton color="primary" onClick={handleEditToggle}>
              <EditIcon />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default EditableStoreInfo
