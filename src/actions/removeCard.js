const REMOVE_CARD = 'REMOVE_CARD';

// Define the action creator
const removeCard = (itemId) => {
  return {
    type: REMOVE_CARD,
    payload: itemId,
  };
};