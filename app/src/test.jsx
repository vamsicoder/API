var MessageView = React.createClass({
	render: function() {
		return ( <p> {this.props.message} </p>)
	}
});


var Button = React.createClass({

	getInitialState : function() {
		return {message: "Hello world"};
	},

	onClick : function() {
		var messages = ["hii", "I", "Love", "you"];
		var index = Math.floor(Math.random() * 4);
		console.log(index);
		var randomMsg = messages[index];
		this.setState({message: randomMsg});
	},

	render: function() {
		return (<div><MessageView message={this.state.message} /><button onClick={this.onClick}>Click me </button></div>)		
	}

});

ReactDOM.render(<Button />, document.getElementById("root"));	