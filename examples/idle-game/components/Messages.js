import React, { Component, PropTypes } from 'react'
import { addMessage } from '../actions'
// import { connect} from 'react-redux';

// const mapStatToProps = (state) => {

// }

// const mapDispatchToProps (dispatch) => {
//   return {

//   }
// }

class Messages extends Component {

	componentDidMount() { 
		const {store} = this.context;
		this.unsubscribe = store.subscribe(() => 
			this.forceUpdate()
			)
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() { 

		const {store} = this.context;
		const state = store.getState();
		
		const getMessages = () => {
			var messageText = state.messageBoard.messages.map((message) => {
				console.log(message)
				return (
					<p>{message}</p>
					);
			})
			return messageText;
		}

		return (
			<div>
			<h1>Messages</h1>
			{ getMessages() }
			</div>
			)
	}
} 

Messages.contextTypes = {
	store: React.PropTypes.object
}

export default Messages
