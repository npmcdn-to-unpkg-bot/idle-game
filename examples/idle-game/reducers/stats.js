
const initialState = {
	attack: 1,
	block: 1,
	health: 10,
	currency: 10
}

export default function stats(state = initialState, action) {

console.log('state', state)
  if (state.currency > 0) {
	  switch (action.type) {
	    case 'INCREMENT_ATTACK':
	      return Object.assign({}, state, {
	        attack: state.attack + 1,
	        currency: state.currency - 1
	      })
	    case 'INCREMENT_BLOCK':
	      return Object.assign({}, state, {
	        block: state.block + 1,
	        currency: state.currency - 1
	      })
	    case 'INCREMENT_HEALTH':
	      return Object.assign({}, state, {
	        health: state.health + 1,
	        currency: state.currency - 1
	      })
	    default:
	      return state
	  }
	} else {
		return state
	}
}