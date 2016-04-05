
const initialState = {
	attack: 1,
	block: 1,
	health: 10,
	currency: 10
}

export default function player(state = initialState, action) {

//console.log('state', state)
  if (state.currency > 0) {
	  switch (action.type) {
	    case 'UPDATE_ATTACK':
	      return Object.assign({}, state, {
	       attack: action.amount,
	       currency: state.currency - action.cost
	      })
	    case 'UPDATE_BLOCK':
	      return Object.assign({}, state, {
	       block: action.amount,
	       currency: state.currency - action.cost
	      })
	    case 'UPDATE_HEALTH':
	      return Object.assign({}, state, {
	        health: action.amount,
	       currency: state.currency - action.cost
	      })
	    case 'UPDATE_CURRENCY':
	      return Object.assign({}, state, {
	        currency: action.amount
	      })
	    // case 'HURT_PLAYER':
	    //   return Object.assign({}, state, {
	    //     health: (state.health - (action.amount - state.block)) > 0 ? (state.health - (action.amount - state.block)) : 0,
	    //   })
	    default:
	      return state
	  }
	} else {
		return state
	}
}