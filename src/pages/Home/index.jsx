import React,{useState} from "react";
import Carousel from "../../components/Carousel";
import InfoDispay from "../../components/InfoDisplay"
import MenuBody from "../../components/MenuBody"
import MenuSearchBar from "../../components/MenuSearchBar";
import MenuCatrgory from "../../components/MenuCategory"
import MenuCategory from "../../components/MenuCategory";
import BottomNav from "../../components/BottomNav"
import TopSearchBar from "../../components/TopSearchBar";
import './style.less'


const categories = [
  {
    name: 'Fruits',
    products: [
      { id: 1, name: 'Apple', price: 1.99, image: 'https://picsum.photos/200/200?random=1', description: 'Fresh apple' },
      { id: 2, name: 'Banana', price: 0.99, image: 'https://picsum.photos/200/200?random=2', description: 'Ripe banana' },
    ],
  },
  {
    name: 'Vegetables',
    products: [
      { id: 3, name: 'Carrot', price: 0.79, image: 'https://picsum.photos/200/200?random=3', description: 'Organic carrot' },
      { id: 4, name: 'Broccoli', price: 1.29, image: 'https://picsum.photos/200/200?random=4', description: 'Fresh broccoli' },
    ],
  },
]; 



//Home Page

const Home = () =>{
    const [price, setPrice]=useState(0);

    //Category State Management
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
  
    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
      setTotalAmount((prevAmount) => prevAmount + product.price);
    };
  
    const clearCart = () => {
      setCartItems([]);
      setTotalAmount(0);
    };

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