import React, { Component, Fragment } from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About" />
                <TopPage pageTitle="About Me" />
                <AboutDescription />
                <Footer />
            </Fragment>
        );
    }
}

export default AboutPage;