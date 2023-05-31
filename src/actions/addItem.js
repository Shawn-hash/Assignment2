export const addItem = amount => {
	return {
		type: 'INCREMENT_COUNTER',
		payload: amount
	};
};