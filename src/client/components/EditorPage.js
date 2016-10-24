const React = require('react');
const Header = require('./Header');
import $ from 'jQuery';

const EditorPage = React.createClass({
	getInitialState () {
	  return { titleText: '', bodyText: ''};
	},

  	_postPost: function () {
    	  return $.ajax({
      		url: '/api/editor',
      		type: 'POST',
      		data: {
        		title: this.state.titleText,
        		text: this.state.bodyText
      		}	
	    })
	},

	updateTitleText(event){
		this.setState({titleText: event.target.value});
	},

	updateBodyText(event){
		this.setState({bodyText: event.target.value});
	},

	render(){
		return(
  			<div>
    			<Header title='Edit and Post Here Dude' />
    			<input 
    				value={this.state.titleText}
    				placeholder='Enter Title Here'
    				type='text'
    				onChange={this.updateTitleText} 
    			/>
    			<input
    				value={this.state.bodyText}
    				placeholder='Enter Post Body Here' 
    				type='text' 
    				onChange={this.updateBodyText}  
    			/>
    			<button type='submit' onClick={this._postPost}> Submit Post </button>
			</div>
 		)
 	}
 })		

module.exports = EditorPage;
