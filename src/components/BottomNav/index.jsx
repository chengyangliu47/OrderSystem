import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './style.less'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import { NavLink } from 'react-router-dom';



const BottomNav=()=> {
  const [value, setValue] = React.useState(0);

  return (
    <Box class="nav-footer" sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction  label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction  label="Person" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNav