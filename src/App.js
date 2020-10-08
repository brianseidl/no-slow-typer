import React from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

import {Root} from './components/Root';
import {Home} from './components/Home';
import Test from './components/TestPage.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path={'/'} component={Root} />
          <Route exact path={'/'} component={Home} />
          <Route path={'/test'} component={Test} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
