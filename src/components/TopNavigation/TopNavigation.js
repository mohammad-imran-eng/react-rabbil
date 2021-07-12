import React, { Component } from 'react';
import { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import '../../asset/css/custom.css'
import { Link, NavLink } from 'react-router-dom';

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarBack: "navBackground",
            navBarItem: "navItem",
            navVariant: "dark",
            pageTitle: props.title
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarBack: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant: "light"
            })
        }
        else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarBack: 'navBackground',
                navBarItem: 'navItem',
                navVariant: "dark"
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Link exact to="/"><Navbar.Brand className={this.state.navBarTitle}>Mohammad Imran</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto {this.state.}">
                            <Nav.Link><NavLink exact activeStyle={{ color: 'teal' }} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: 'teal' }} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: 'teal' }} className={this.state.navBarItem} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: 'teal' }} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: 'teal' }} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: 'teal' }} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;