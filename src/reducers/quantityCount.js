import { DECREMENT_QUANTITY, INCREMENT_QUANTITY, DELETE_ITEM } from '../actions/changeQuantity';

const initialState = {
  quantity: 1,
};

const quantityCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_QUANTITY:
      if (state.quantity > 0) {
        return {
          ...state,
          quantity: state.quantity - 1,
        };
      }
      return state;

    case INCREMENT_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case DELETE_ITEM:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default quantityCountReducer;