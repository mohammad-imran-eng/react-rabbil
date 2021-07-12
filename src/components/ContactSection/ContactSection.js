import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contactSection">Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>


                                <Button variant="info" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="contactSection">Discuss Now</h1>
                            <p className="courseDesc footerLink">#45/4 College Road Aria , 2nd Floor Front Side, Barguna</p>
                            <p className="courseDesc footerLink"> <FontAwesomeIcon icon={faEnvelope} /> mi.websoftwaredeveloper@gmail.com</p>
                            <p className="courseDesc footerLink"> <FontAwesomeIcon icon={faPhone} /> +01735572103</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;