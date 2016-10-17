
const React = require('react');
import { Jumbotron } from 'react-bootstrap';
import { Button} from 'react-bootstrap';

const Header = React.createClass({
  render () {
    return (
      <Jumbotron>
        <h1>
          {this.props.title}
        </h1>
      </Jumbotron>
    )
  }
});

Header.propTypes = {
  title: React.PropTypes.string
};

module.exports = Header;