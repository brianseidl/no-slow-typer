import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Route} from 'react-router-dom';

import {Root} from './components/Root';
import {Home} from './components/Home';
import Test from './components/TestPage.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Route path={'/'} component={Root} />
        <Route exact path={'/'} component={Home} />
        <Route path={'/test'} component={Test} />
      </div>
    );
  }
}

export default App;
