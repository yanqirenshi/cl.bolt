import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bulma/css/bulma.min.css';

import ManualV1 from './pages/ManualV1.js';

function App() {
    return (
        <BrowserRouter>
          <Route exact path='/cl-bolt' component={ManualV1} />
        </BrowserRouter>
    );
}

export default App;
