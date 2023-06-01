const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CARD:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    // Handle other actions...
    default:
      return state;
  }
};