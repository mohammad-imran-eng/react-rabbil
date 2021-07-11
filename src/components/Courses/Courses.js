import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../asset/images/courses.jpg'

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle text-center">OUR COURSES</h1>
                    <Row className="mt-3">
                        <Col lg={6} md={12} sm={12}>
                            <Row className="mt-3">
                                <Col lg={6} md={6} sm={12}>
                                    <img style={{ width: '100%' }} src={img} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="text-justify courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis ad id commodi nemo atque reiciendis exercitationem nisi error?</p>
                                    <a className="courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row className="mt-3">
                                <Col lg={6} md={6} sm={12}>
                                    <img style={{ width: '100%' }} src={img} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="text-justify courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis ad id commodi nemo atque reiciendis exercitationem nisi error?</p>
                                    <a className="courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row className="mt-3">
                                <Col lg={6} md={6} sm={12}>
                                    <img style={{ width: '100%' }} src={img} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="text-justify courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis ad id commodi nemo atque reiciendis exercitationem nisi error?</p>
                                    <a className="courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row className="mt-3">
                                <Col lg={6} md={6} sm={12}>
                                    <img style={{ width: '100%' }} src={img} alt="" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p className="text-justify courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis ad id commodi nemo atque reiciendis exercitationem nisi error?</p>
                                    <a className="courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Courses;