import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function MenuCategory() {
  const [value, setValue] = React.useState(0);

  return (
    <div className='menu-category'>
        <Box  sx={{ width: 500 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Vegetables"  />
            <BottomNavigationAction label="fruits"  />
        </BottomNavigation>
        </Box>
    </div>    
  );
}