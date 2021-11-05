import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Landing, Portfolio, About, Contact, NoMatch } from '../pages';

export const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </HashRouter>
  );
};
