import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './style.less'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';



const BottomNav=()=> {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNav
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="HomeIcon" icon={<HomeIcon />} />
        <BottomNavigationAction label="SearchIcon" icon={<SearchIcon />} />
        <BottomNavigationAction label="PersonIcon" icon={<PersonIcon />} />
      </BottomNav>
    </Box>
  );
}

export default BottomNav