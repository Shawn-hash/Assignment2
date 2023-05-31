import React from 'react';

const Card = ({ item }) => {
  if (!item || !item.name || !item.description || !item.price || !item.image) {
    // Return null or an error message when the item object is undefined or properties are missing
    return null; // or <div>Error: Invalid item data</div>
  }

  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: {item.price}</p>
      </div>
    </div>
  );
};

export default Card;