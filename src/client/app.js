const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Layout = require('./components/Layout');
const Landing = require('./components/Landing');
const About = require('./components/About');
const Content = require('./components/Content');
const EditorPage = require('./components/EditorPage');
const { Router, Route, hashHistory, IndexRoute } = ReactRouter;

const App = () => (
  <Router history={hashHistory}>
  	<Route path='/' component={Layout}>
  		<IndexRoute component={Landing} />
    	<Route path='/content' component={Content} />
      	<Route path='/about' component={About} />
      	<Route path='/editor' component={EditorPage} />
    </Route>
  </Router>
 );

ReactDOM.render(<App />, document.getElementById('root'));
