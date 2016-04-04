import React, { Component, PropTypes } from 'react'

const Stat = ({
  value,
  text,
  onIncrement
}) => {
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

Stat.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default Stat
