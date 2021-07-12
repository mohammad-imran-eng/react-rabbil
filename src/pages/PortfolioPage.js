import React, { Component, Fragment } from 'react';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio" />
                <TopPage pageTitle="Portfolio" />
                <AllProjects />
                <Footer />
            </Fragment>
        );
    }
}

export default PortfolioPage;