import React, { useState } from 'react';
import Card from './Card';
import AddForm from './AddForm';

const CardContainer = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <AddForm addItem={addItem} />
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
