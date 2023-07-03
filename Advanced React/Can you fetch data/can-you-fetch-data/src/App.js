import React, { useState, useEffect } from 'react';
import "./App.css"

const useAddToCartAnimation = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    let timeout;

    if (isAddedToCart) {
      timeout = setTimeout(() => {
        setIsAddedToCart(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isAddedToCart]);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  return {
    isAddedToCart,
    handleAddToCart,
  };
};

const App = () => {
  const { isAddedToCart, handleAddToCart } = useAddToCartAnimation();

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={`add-to-cart-button ${isAddedToCart ? 'added' : ''}`}
      >
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default App;
