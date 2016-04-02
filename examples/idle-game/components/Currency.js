import React, { Component, PropTypes } from 'react'

class Currency extends Component {
  constructor(props) {
    super(props)
    //this.incrementAsync = this.incrementAsync.bind(this)
    //this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

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
