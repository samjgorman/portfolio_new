import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import About from './containers/about';
import Case from './containers/casestudy';
import Random from './containers/random';
import Connect from './containers/connect';
import Figma from './containers/figma';
import * as serviceWorker from './serviceWorker';
import { useLocation, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);

const routing = (
    <Router>
      <div>
      <ScrollToTop/> 

        <Switch> 

        <Route exact path="/" component={App} />
        <Route path="/case" component={Case} />
        <Route path="/random" component={Random} />
        <Route path="/connect" component={Connect} />
        <Route path="/figma-kp" component={Figma} />
        <Route path="/about" component={About} />

        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(
routing
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
