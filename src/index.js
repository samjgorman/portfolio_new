import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Case from './containers/casestudy';


const routing = (
    <Router>
      <div>
        <Switch> 
        <Route path="/case" component={Case} />

       />
        </Switch>
      </div>
    </Router>
  )


ReactDOM.render(
    <App></App>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
