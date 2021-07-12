import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import RefundDescription from '../components/RefundDescription/RefundDescription';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy" />
                <TopPage pageTitle="Refund Policy" />
                <RefundDescription />
                <Footer />
            </Fragment>
        );
    }
}

export default RefundPage;