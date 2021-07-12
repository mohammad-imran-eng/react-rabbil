import React, { Component, Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopPage from '../components/TopPage/TopPage';

class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses" />
                <TopPage pageTitle="All Courses" />
                <AllCourses />
                <Footer />
            </Fragment>
        );
    }
}

export default CoursePage;