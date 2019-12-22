import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import HomePage from '../HomePage/loadable';
import AboutAs from '../AboutAs/loadable';
import CottonRope from '../CottonRope/loadable';
import Products from '../Products/loadable';
import Contacts from '../Contacts/loadable';
import Calculation from '../Calculation/loadable';
import Delivery from '../Delivery/loadable';
import Conditions from '../Conditions/loadable';
import Service from '../Service/loadable';
import Training from '../Training/loadable';
import Information from '../Information/loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/apie_mus" component={AboutAs} />
        <Route exact path="/medvilnines_virves" component={CottonRope} />
        <Route exact path="/gaminiai" component={Products} />
        <Route exact path="/kontaktai" component={Contacts} />
        <Route exact path="/skaiciuokles" component={Calculation} />
        <Route exact path="/pristatymas" component={Delivery} />
        <Route exact path="/salygos" component={Conditions} />
        <Route exact path="/paslaugos" component={Service} />
        <Route exact path="/mokymai" component={Training} />
        <Route exact path="/informacija" component={Information} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      {/* <GlobalStyle /> */}
      <Footer />
    </>
  );
}
