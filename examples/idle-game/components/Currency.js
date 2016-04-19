import React, { Component, PropTypes } from 'react'

class Currency extends Component {

  render() {
    const { value, text } = this.props
    return (
      <p>
        {text}: {value}
        {' '}
      </p>
    )
  }
} 

Currency.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Currency
