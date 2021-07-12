import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ConditionPage from '../pages/ConditionPage';
import ContactPage from '../pages/ContactPage';
import CoursePage from '../pages/CoursePage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import PrivatePage from '../pages/PrivatePage';
import RefundPage from '../pages/RefundPage';
import ServicePage from '../pages/ServicePage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/services" component={ServicePage} />
                    <Route exact path="/courses" component={CoursePage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/terms&condition" component={ConditionPage} />
                    <Route exact path="/privatePolicy" component={PrivatePage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;