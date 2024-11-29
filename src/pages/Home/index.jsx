import React,{useState} from "react";
import Carousel from "../../components/Carousel";
import InfoDispay from "../../components/InfoDisplay"
import MenuBody from "../../components/MenuBody"
import MenuSearchBar from "../../components/MenuSearchBar";
import MenuCatrgory from "../../components/MenuCategory"
import MenuCart from "../../components/MenuCart"
import MenuCategory from "../../components/MenuCategory";
import BottomNav from "../../components/BottomNav"
import TopSearchBar from "../../components/TopSearchBar";
import './style.less'


  



//Home Page

const Home = () =>{

    return(
      <div>
        <TopSearchBar />
        <Carousel/>
        <InfoDispay/>
        <MenuBody/>
        <div className="blank-space"></div>
      </div>
    )
};

export default Home