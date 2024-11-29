import React from "react";
import './style.less'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function TopSearchBar() {
  return (
    <div class="menu-search-header">
        
        <IconButton className="top-header-left" type="button" sx={{ p: '10px',fontSize:20 }} >
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
        <IconButton className="top-header-right" type="button" sx={{ p: '10px' }} >
            <ShoppingCartIcon />
        </IconButton>
    </div>
  );
}