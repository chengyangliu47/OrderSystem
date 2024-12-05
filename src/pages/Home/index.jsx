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
      { id: 1, name: 'Apple', price: 1.99, image: fruit1, description: 'Fresh apple' },
      { id: 2, name: 'Banana', price: 0.99, image: fruit2, description: 'Ripe banana' },
      { id: 3, name: 'Orange', price: 1.49, image: fruit1, description: 'Juicy orange' },
      { id: 4, name: 'Strawberry', price: 2.99, image: fruit2, description: 'Sweet strawberries' },
      { id: 5, name: 'Grapes', price: 3.99, image: fruit1, description: 'Fresh grapes' },
    ],
  },
  {
    name: 'Vegetables',
    products: [
      { id: 1, name: 'Carrot', price: 0.79, image: vege1, description: 'Organic carrot' },
      { id: 2, name: 'Broccoli', price: 1.29, image: vege2, description: 'Fresh broccoli' },
      { id: 3, name: 'Tomato', price: 0.99, image: vege1, description: 'Ripe tomato' },
      { id: 4, name: 'Spinach', price: 1.99, image: vege2, description: 'Leafy spinach' },
      { id: 5, name: 'Potato', price: 0.49, image: vege1, description: 'Starchy potato' },
    ],
  },
  {
    name: 'Tropical Fruits',
    products: [
      { id: 1, name: 'Pineapple', price: 4.99, image: fruit2, description: 'Tropical pineapple' },
      { id: 2, name: 'Mango', price: 2.49, image: fruit1, description: 'Tropical mango' },
      { id: 3, name: 'Blueberry', price: 3.49, image: fruit2, description: 'Healthy blueberries' },
      { id: 4, name: 'Watermelon', price: 6.99, image: fruit1, description: 'Refreshing watermelon' },
      { id: 5, name: 'Peach', price: 1.89, image: fruit2, description: 'Juicy peach' },
    ],
  },
  {
    name: 'Root Vegetables',
    products: [
      { id: 1, name: 'Onion', price: 0.69, image: vege1, description: 'Fresh onion' },
      { id: 2, name: 'Garlic', price: 1.19, image: vege2, description: 'Flavorful garlic' },
      { id: 3, name: 'Beetroot', price: 0.99, image: vege1, description: 'Nutritious beetroot' },
      { id: 4, name: 'Radish', price: 0.89, image: vege2, description: 'Crisp radish' },
      { id: 5, name: 'Sweet Potato', price: 1.29, image: vege1, description: 'Sweet and starchy' },
    ],
  },
  {
    name: 'Salad Greens',
    products: [
      { id: 1, name: 'Lettuce', price: 1.49, image: vege2, description: 'Crisp lettuce' },
      { id: 2, name: 'Kale', price: 2.49, image: vege1, description: 'Healthy kale' },
      { id: 3, name: 'Arugula', price: 1.99, image: vege2, description: 'Peppery arugula' },
      { id: 4, name: 'Cabbage', price: 1.29, image: vege1, description: 'Fresh cabbage' },
      { id: 5, name: 'Celery', price: 1.89, image: vege2, description: 'Crunchy celery' },
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