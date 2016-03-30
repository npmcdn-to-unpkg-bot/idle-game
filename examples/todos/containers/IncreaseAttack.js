import { connect } from 'react-redux'
import { incAttack } from '../actions'
import Attack from '../components/Attack'

const mapStateToProps = (state) => {
	console.log(state)
  return {
    attackValue: state.attack.attackValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(incAttack())
    }
  }
}

const IncreaseAttack = connect(
  mapStateToProps,
  mapDispatchToProps
)(Attack)

export default IncreaseAttack
