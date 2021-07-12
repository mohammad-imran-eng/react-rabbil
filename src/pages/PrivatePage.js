import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PrivateDescription from '../components/PrivacyDescription/PrivateDescription';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class PrivatePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy" />
                <TopPage pageTitle="Privacy Policy" />
                <PrivateDescription />
                <Footer />
            </Fragment>
        );
    }
}

export default PrivatePage;