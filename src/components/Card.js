import React, { useState } from 'react';
import Popup from './Popup';

const Card = ({ item, onDelete }) => {
  let [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!item || !item.name || !item.description || !item.price || !item.image) {
     return null;
  }

  const handleDelete = () => {
      onDelete(item);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="card">
      <span className="close-btn" onClick={handleDelete}>×</span>
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <h3>{item.name}</h3>
      </div>
      <div className="quantity">
          <button className="quantity-btn" onClick={handleDecrement}>-</button>
          <span className="quantity-number">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleCardClick}>Expand</button>
      {showPopup && <Popup item={item} onClose={handleClosePopup} />}
    </div>
  );
};

export default Card;