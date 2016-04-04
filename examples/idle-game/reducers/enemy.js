
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

	    default: 
	    	return state
	    }
}