import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OnePage from '../pages/OnePage';
import Loader from '../components/loader';
import Portfolio from '../pages/Portfolio';

const Routes = () => {
    return (
            <Router basename="/">
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route exact path="/" component={OnePage} key="main" />
                    <Route exact path="/portfolio" component={Portfolio} key="main" />
                  </Switch>
                </Suspense>
            </Router>
    );
}

export default Routes;
