import React, { useState } from 'react';
import "../css/menu.css";

const Menu = (props) => {
  const { burgerData } = props;
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (burger) => {
    setCartItems([...cartItems, burger]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.Price, 0);
  };

  const checkout = () => {
    console.log('Checkout:', cartItems);
    setCartItems([]);
  };

  return (
    <div className="menu-container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="text-center">Menu</h1>
          {burgerData.map((burger, index) => (
            <div className="row burger-box burger-boxRadius" key={index}>
              <div className="burger-box col-12">
                <img className="img" src={'/imgs/' + burger.Photo} alt={"Burger img"} />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          {burgerData.map((burger, index) => (
            <div className="row burger-box burger-boxRadius" key={index}>
              <div className="col-12">
                <h2>{burger.BurgerType}</h2>
                <p>{burger.Description}</p>
                <p>Price: {burger.Price}</p>
                <button onClick={() => addToCart(burger)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="checkout">
            {cartItems.length > 0 && (
              <div>
                <h2>Checkout ({cartItems.length} items)</h2>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.BurgerType} - ${item.Price}
                      <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <p>Total: ${calculateTotal()}</p>
                <button onClick={checkout}>Proceed to Checkout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
