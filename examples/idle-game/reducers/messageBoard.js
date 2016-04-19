
const initialState = {
	messages: ["Welcome to the game. You have 10 currency to spend on upgrading your stats. Spend them as you like and then click 'Fight' to battle your first enemy"]
}

export default function messageBoard(state = initialState, action) {
	switch (action.type) {
		case 'ADD_MESSAGE':
		return Object.assign({}, state, {
			messages: [...state.messages, action.message]
		})
		default: 
		return state
	}
}