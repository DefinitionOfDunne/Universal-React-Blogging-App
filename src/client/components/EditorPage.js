const React = require('react');
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
  				<form className='post-input'>
    			<input 
    				value={this.state.titleText}
    				placeholder='Enter Title Here'
    				type='text'
    				onChange={this.updateTitleText} 
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


<form>
	<div class="form-group">
		<label class="control-label " for="message_id">Message</label>
		<textarea class="form-control" id="message_id" name="message" rows="5"></textarea>
	</div>
	
	<div class="form-group">
		<button class="btn btn-primary " name="submit" type="submit">Submit</button>
	</div>
</form>
