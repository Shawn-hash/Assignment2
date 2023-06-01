import React, { useState } from 'react';
import Card from './Card';
import AddForm from './AddForm';

const CardContainer = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (item) => {
      setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
  };

  return (
    <div>
      <AddForm addItem={handleAddItem} />
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} item={item} onDelete={handleDeleteItem}/>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
