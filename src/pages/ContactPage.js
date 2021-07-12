import React, { Component, Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact" />
                <TopPage pageTitle="Contact Me" />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;