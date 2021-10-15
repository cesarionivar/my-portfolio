import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import { Portfolio } from '../pages/Portfolio';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { NoMatch } from '../pages/NoMatch';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
