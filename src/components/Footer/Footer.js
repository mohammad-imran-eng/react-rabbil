import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footer">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Follow Me</h1>
                            <a className="socialLink" href="#"> <FontAwesomeIcon icon={faFacebook} /> Facebook</a> <br />
                            <a className="socialLink" href="#"> <FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <p className="courseDesc footerLink">#45/4 College Road Aria , 2nd Floor Front Side, Barguna</p>
                            <p className="courseDesc footerLink"> <FontAwesomeIcon icon={faEnvelope} /> mi.websoftwaredeveloper@gmail.com</p>
                            <p className="courseDesc footerLink"> <FontAwesomeIcon icon={faPhone} /> +01735572103</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Information</h1>
                            <Link to="/about" className="footerLink">About Me</Link> <br />
                            <Link to="/contact" className="footerLink">Contact Me</Link> <br />
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerTitle">Legal</h1>
                            <Link to="/refund" className="footerLink">Refund Policy</Link> <br />
                            <Link to="/terms&condition" className="footerLink">Terms And Condition</Link> <br />
                            <Link to="/privatePolicy" className="footerLink">Private Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a href="#" className="copyrightLink"> programming-idol.com &copy; 2021-2022</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;