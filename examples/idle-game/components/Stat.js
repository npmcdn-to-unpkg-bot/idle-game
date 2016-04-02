import React, { Component, PropTypes } from 'react'

class Stat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, text, onIncrement } = this.props
    return (
      <p>
        {text}: {value}
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
      </p>
    )
  }
} 

Stat.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default Stat
