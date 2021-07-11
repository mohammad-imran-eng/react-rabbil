import React, { Component } from 'react';
import { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import '../../asset/css/custom.css'

class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarBack: "navBackground",
            navBarItem: "navItem"
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll'
            })
        }
        else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarBack: 'navBackground',
                navBarItem: 'navItem'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle}>Mohammad Imran</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto {this.state.}">
                            <Nav.Link href="#deets" className={this.state.navBarItem}>HOME</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>SERVICES</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>COURSES</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>CONTACT</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;