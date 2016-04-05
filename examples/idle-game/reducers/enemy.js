
const initialState = {
	attack: 3,
	health: 7,
	reward: 10
}

export default function enemy(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_ENEMY_HEALTH':
		return Object.assign({}, state, {
			health: action.amount
		})
		case 'CREATE_NEW_ENEMY': 
		return Object.assign({}, state, {
			attack: action.attack,
			health: action.health,
			reward: action.reward,
		})

		default: 
		return state
	}
}