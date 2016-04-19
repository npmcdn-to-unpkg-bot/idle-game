import React, { PropTypes } from 'react'

const Attack = ({ attack, onClick }) => (
  <div>
    <p>Attack: {attack} </p>

    <button
      onClick={onClick} 
    >
    Increase
    </button>
  </div>
)

Attack.propTypes = {
  onClick: PropTypes.func.isRequired,
  attack: PropTypes.number.isRequired
}

export default Attack
