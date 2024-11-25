import React,{useState} from "react";
import Carousel from "../../components/Carousel";
import InfoDispay from "../../components/InfoDisplay"
import MenuBody from "../../components/MenuBody"
import MenuSearchBar from "../../components/MenuSeachBar";
import MenuCatrgory from "../../components/MenuCategory"
import MenuCart from "../../components/MenuCart"
import MenuCategory from "../../components/MenuCategory";


//data for menu category

const emptyCategories = [];

  // 有分类数据的情况
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
  



//Store Page

const Store = () =>{

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
            <Carousel />
            <InfoDispay />
            <MenuBody title="Menu">
                <MenuSearchBar/>
                <MenuCategory categories={categories} addToCart={addToCart} />
                <MenuCart cartItems={cartItems} totalAmount={totalAmount} clearCart={clearCart} />
            </MenuBody>
        </div>
    )
};

export default Store