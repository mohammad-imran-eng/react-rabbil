import React, { Component, Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services" />
                <TopPage pageTitle="My Services" />
                <Services />
                <ContactSection />
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default ServicePage;