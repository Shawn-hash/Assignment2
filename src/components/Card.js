import React, { useState } from 'react';
import Popup from './Popup';

const Card = ({ item, onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);

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


  return (
    <div className="card" onClick={handleCardClick} >
      <span className="close-btn" onClick={handleDelete}>×</span>
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <h3>{item.name}</h3>
      </div>
      {showPopup && <Popup item={item} onClose={handleClosePopup} />}
    </div>
  );
};

export default Card;