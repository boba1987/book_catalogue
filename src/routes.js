import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CataloguePage from './containers/CataloguePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CataloguePage}/>
  </Route>
);
