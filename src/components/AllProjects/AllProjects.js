import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img from '../../asset/images/recent.jpg'

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="recentPojectCard">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recnetProjectCardDec">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="recentPojectCard">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recnetProjectCardDec">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="recentPojectCard">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recnetProjectCardDec">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="recentPojectCard">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recnetProjectCardDec">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="recentPojectCard">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recnetProjectCardDec">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="recentPojectCard">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recnetProjectCardDec">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;