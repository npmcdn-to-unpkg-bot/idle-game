const DEFAULT_STATE = {
  attack: 1,
  defence:1
}

const stats = (state = DEFAULT_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT_ATTACK':
      return Object.assign({}, state, {
        attack: state.attack + 1
      })
    case 'INCREMENT_DEFENCE':
      return Object.assign({}, state, {
        defence: state.defence + 1
      })
    default:
      return state
  },
}

export default stats
