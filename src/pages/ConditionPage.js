import React, { Component, Fragment } from 'react';
import ConditionDescription from '../components/ConditionDescription/ConditionDescription';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class ConditionPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & condition" />
                <TopPage pageTitle="Terms and Condition" />
                <ConditionDescription />
                <Footer />
            </Fragment>
        );
    }
}

export default ConditionPage;