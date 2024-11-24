import React from "react";
import "./style.less"
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BottomNav = () =>{
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink  to="/">
                    <MenuIcon/>
                    <i className="inconfont icon-setting">
                        
                    </i>
                    </NavLink>
                   
                </li>
                <li>
                    <NavLink  to="/">
                    <InsertPhotoOutlinedIcon/>
                    <i className="inconfont icon-storeIcon">
                    </i>
                    </NavLink>
                   
                </li>
                <li>
                    <NavLink  to="/">
                    <LocationOnIcon/>
                    <i className="inconfont icon-address">
                    address
                    </i>
                    </NavLink>
                   
                </li>
                <li>
                    <NavLink  to="/">
                    <LocalGroceryStoreIcon/>
                    <i className="inconfont icon-cart">
                    
                    </i>
                    </NavLink>
                   
                </li>
                <li>
                    <NavLink  to="/">
                    <NotificationsNoneIcon/>
                    <i className="inconfont icon-notification">
                    
                    </i>
                    </NavLink>
                   
                </li>
            </ul>
        </div>
    )
}

export default BottomNav