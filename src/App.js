import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Root} from './components/Root';
import {Home} from './components/Home';
import Test from './components/TestPage.js';
import {Mode} from './components/Mode.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mode />
      </header>
      {/* <div>
        
        <Route path={'/'} component={Root} />
        <Route exact path={'/'} component={Home} />
        <Route path={'/test'} component={Test} />
      </div> */}
    </div>
      
    );
  }
}

export default App;
