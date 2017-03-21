const React = require('react');
import $ from 'jQuery';

const EditorPage = React.createClass({
	getInitialState () {
		return { titleText: '', dateText: '', authorText: '', bodyText: ''};
	},

	_postPost: function () {
		return $.ajax({
			url: '/api/editor',
			type: 'POST',
			data: {
				title: this.state.titleText,
				date: this.state.dateText,
				author: this.state.authorText,
				text: this.state.bodyText
			}	
		})
	},

	updateTitleText(event){
		this.setState({titleText: event.target.value});
	},
	updateDateText(event){
		this.setState({dateText: event.target.value});
	},	
	updateAuthorText(event){
		this.setState({authorText: event.target.value});
	},
	updateBodyText(event){
		this.setState({bodyText: event.target.value});
	},

	render(){
		return(
  			<div>
  				<form className='post-input'>
    			<input 
    				value={this.state.titleText}
    				placeholder='Enter Title Here'
    				type='text'
    				onChange={this.updateTitleText} 
    			/>
    			<input 
    				value={this.state.authorText}
    				placeholder='Author Name'
    				type='text'
    				onChange={this.updateAuthorText} 
    			/>
    			<input 
    				value={this.state.dateText}
    				placeholder='Date'
    				type='text'
    				onChange={this.updateDateText} 
    			/>    			
    			<textarea
    				value={this.state.bodyText}
    				placeholder='Enter Post Body Here' 
    				type='text' 
    				onChange={this.updateBodyText}
    				rows='10'  
    			/>
    			<button type='submit' onClick={this._postPost}> Submit Post </button>
    			</form>
	       </div>
 		  )
 	  }
 })		

module.exports = EditorPage;
