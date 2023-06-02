export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DELETE_ITEM = 'DELETE_ITEM';

export const incrementQuantity = (quantity) => {
  return {
      type: INCREMENT_QUANTITY,
      payload: quantity,
    };
  };

  export const decrementQuantity = (quantity) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: quantity,
    };
  };