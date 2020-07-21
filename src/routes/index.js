import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OnePage from '../pages/OnePage';
import Loader from '../components/loader';

const Routes = () => {
    return (
            <Router basename="/">
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route exact path="/" component={OnePage} key="main" />
                  </Switch>
                </Suspense>
            </Router>
    );
}

export default Routes;
