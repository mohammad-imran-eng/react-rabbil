import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobile, faPencilRuler } from '@fortawesome/free-solid-svg-icons'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center my-5">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row className="my-4">
                        <Col lg={4} md={6} sm={12}>
                            <Card className="text-center mx-auto">
                                <div className="text-center text-info mt-2">
                                    <FontAwesomeIcon size="8x" icon={faLaptopCode} className="icon-border" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Web Development</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="text-center mx-auto mt-2">
                                <div className="text-center text-info mt-2">
                                    <FontAwesomeIcon size="8x" icon={faMobile} className="icon-border" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Mobile Development</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="text-center mx-auto mt-2">
                                <div className="text-center text-info mt-2">
                                    <FontAwesomeIcon size="8x" icon={faPencilRuler} className="icon-border" />
                                </div>
                                <Card.Body>
                                    <Card.Title>Graphics Design</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row >
                </Container >
            </Fragment >
        );
    }
}

export default Services;