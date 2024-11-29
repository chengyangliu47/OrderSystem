import React from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./style.less"

export default function MenuSearchBar() {
  return (
    <div className="menu-search-header">
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'left', width: 400 }}
        >
        <InputBase
            sx={{ ml: 1, flex: 1, left: 0 }}
            placeholder="Search Items"
            inputProps={{ 'aria-label': 'Search Items' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        </Paper>
    </div>    
  );
}