import React,{useState} from "react";
import Carousel from "../../components/Carousel";
import MenuCatrgory from "../../components/MenuCategory"
import MenuCategory from "../../components/MenuCategory";
import BottomNav from "../../components/BottomNav"
import TopSearchBar from "../../components/TopSearchBar";
import './style.less'
import fruit1 from "../../assets/fruit1.jpg"
import fruit2 from "../../assets/fruit2.jpg"
import vege1 from "../../assets/vege1.jpg"
import vege2 from "../../assets/vege2.jpg"

const categories = [
  {
    name: 'Fruits',
    products: [
      { id: 1, name: 'Apple', price: 1.99, image: fruit1, description: 'Fresh apple', size: 'Small' },
      { id: 2, name: 'Banana', price: 0.99, image: fruit2, description: 'Ripe banana', size: 'Medium' },
      { id: 3, name: 'Orange', price: 1.49, image: fruit1, description: 'Juicy orange', size: 'Large' },
      { id: 4, name: 'Strawberry', price: 2.99, image: fruit2, description: 'Sweet strawberries', size: 'Small' },
      { id: 5, name: 'Grapes', price: 3.99, image: fruit1, description: 'Fresh grapes', size: 'Medium' },
      { id: 6, name: 'Pineapple', price: 4.99, image: fruit2, description: 'Tropical pineapple', size: 'Large' },
      { id: 7, name: 'Mango', price: 2.49, image: fruit1, description: 'Tropical mango', size: 'Small' },
      { id: 8, name: 'Blueberry', price: 3.49, image: fruit2, description: 'Healthy blueberries', size: 'Medium' },
      { id: 9, name: 'Watermelon', price: 6.99, image: fruit1, description: 'Refreshing watermelon', size: 'Large' },
    ],
  },
  {
    name: 'Vegetables',
    products: [
      { id: 1, name: 'Carrot', price: 0.79, image: vege1, description: 'Organic carrot', size: 'Small' },
      { id: 2, name: 'Broccoli', price: 1.29, image: vege2, description: 'Fresh broccoli', size: 'Medium' },
      { id: 3, name: 'Tomato', price: 0.99, image: vege1, description: 'Ripe tomato', size: 'Large' },
      { id: 4, name: 'Spinach', price: 1.99, image: vege2, description: 'Leafy spinach', size: 'Small' },
      { id: 5, name: 'Potato', price: 0.49, image: vege1, description: 'Starchy potato', size: 'Medium' },
      { id: 6, name: 'Onion', price: 0.69, image: vege1, description: 'Fresh onion', size: 'Large' },
      { id: 7, name: 'Garlic', price: 1.19, image: vege2, description: 'Flavorful garlic', size: 'Small' },
      { id: 8, name: 'Beetroot', price: 0.99, image: vege1, description: 'Nutritious beetroot', size: 'Medium' },
      { id: 9, name: 'Radish', price: 0.89, image: vege2, description: 'Crisp radish', size: 'Large' },
    ],
  },
  {
    name: 'Tropical Fruits',
    products: [
      { id: 1, name: 'Pineapple', price: 4.99, image: fruit2, description: 'Tropical pineapple', size: 'Small' },
      { id: 2, name: 'Mango', price: 2.49, image: fruit1, description: 'Tropical mango', size: 'Medium' },
      { id: 3, name: 'Blueberry', price: 3.49, image: fruit2, description: 'Healthy blueberries', size: 'Large' },
      { id: 4, name: 'Watermelon', price: 6.99, image: fruit1, description: 'Refreshing watermelon', size: 'Small' },
      { id: 5, name: 'Peach', price: 1.89, image: fruit2, description: 'Juicy peach', size: 'Medium' },
      { id: 6, name: 'Coconut', price: 3.99, image: fruit1, description: 'Fresh coconut', size: 'Large' },
      { id: 7, name: 'Papaya', price: 4.29, image: fruit2, description: 'Ripe papaya', size: 'Small' },
      { id: 8, name: 'Lychee', price: 5.49, image: fruit1, description: 'Sweet lychee', size: 'Medium' },
      { id: 9, name: 'Dragon Fruit', price: 6.49, image: fruit2, description: 'Exotic dragon fruit', size: 'Large' },
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
        <TopSearchBar cartItems={cartItems} totalAmount={totalAmount} clearCart={clearCart} />
        <hr/>
        <body className="main-body">
          <Carousel />
          <MenuCatrgory categories={categories} addToCart={addToCart} clearCart={clearCart} cartItems={cartItems} totalAmount={totalAmount}/>
        <div className="blank-space"></div>
        </body>
      </div>
    )
};

export default Home