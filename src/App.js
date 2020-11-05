import React from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

import {Root} from './components/Root';
import Home from './components/Home';
import Typer from './components/Typer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path={'/'} component={Root} />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/test/'} component={Typer} />
          <Route path={'/test/:mode'} component={Typer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
