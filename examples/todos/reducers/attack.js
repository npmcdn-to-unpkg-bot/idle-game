const DEFAULT_STATE = {
  attackValue: 1
}

const attack = (state = DEFAULT_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT_ATTACK':
      return Object.assign({}, state, {
        attackValue: state.attackValue + 1
      })
    default:
      return state
  }
}

export default attack
