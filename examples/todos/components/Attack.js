import React, { PropTypes } from 'react'

const Attack = ({ attackValue, onClick }) => (
  <div>
    <p>Attack: {attackValue} </p>

    <button
      onClick={onClick} 
    >
    Increase
    </button>
  </div>
)

Attack.propTypes = {
  onClick: PropTypes.func.isRequired,
  attackValue: PropTypes.number.isRequired
}

export default Attack
