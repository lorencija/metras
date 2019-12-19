import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/index';
import AboutAs from '../AboutAs/index';
import CottonRope from '../CottonRope/index';
import Products from '../Products/index';
import Articles from '../Articles/index';
import Contacts from '../Contacts/index';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/apie_mus" component={AboutAs} />
        <Route exact path="/medvilnines_virves" component={CottonRope} />
        <Route exact path="/gaminiai" component={Products} />
        <Route exact path="/straipsniai" component={Articles} />
        <Route exact path="/kontaktai" component={Contacts} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      {/* <GlobalStyle /> */}
    </div>
  );
}
