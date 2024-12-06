import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AddToWishlist = ({ product, onAddToWishlist, onRemoveFromWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      setIsInWishlist(false);
      if (onRemoveFromWishlist) {
        onRemoveFromWishlist(product);
      }
    } else {
      setIsInWishlist(true);
      if (onAddToWishlist) {
        onAddToWishlist(product);
      }
    }
  };

  return (
    <Tooltip title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}>
      <IconButton
        color={isInWishlist ? 'secondary' : 'default'}
        onClick={handleWishlistToggle}
      >
        {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default AddToWishlist
