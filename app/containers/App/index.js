import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import HomePage from '../HomePage';
import AboutAs from '../AboutAs';
import CottonRope from '../CottonRope';
import Products from '../Products';
import Contacts from '../Contacts';
import Calculation from '../Calculation';
import Delivery from '../Delivery';
import Conditions from '../Conditions';
import Service from '../Service';
import Training from '../Training';
import Information from '../Information';
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
