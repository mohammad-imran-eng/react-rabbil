import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className="courseTitle">Who i Am</h1>
                            <hr />
                            <p className="courseDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, rerum deleniti. Sint illum aperiam sunt itaque voluptatem tempora qui magnam dolore! Aliquam dolorem voluptatem omnis, ea consequuntur nobis voluptate illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam dolor possimus aut neque qui placeat voluptates aspernatur optio nesciunt! </p>
                            <h1 className="courseTitle">My Mission</h1>
                            <hr />
                            <p className="courseDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, rerum deleniti. Sint illum aperiam sunt itaque voluptatem tempora qui magnam dolore! Aliquam dolorem voluptatem omnis, ea consequuntur nobis voluptate illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam dolor possimus aut neque qui placeat voluptates aspernatur optio nesciunt! </p>
                            <h1 className="courseTitle">My Vission</h1>
                            <hr />
                            <p className="courseDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, rerum deleniti. Sint illum aperiam sunt itaque voluptatem tempora qui magnam dolore! Aliquam dolorem voluptatem omnis, ea consequuntur nobis voluptate illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam dolor possimus aut neque qui placeat voluptates aspernatur optio nesciunt! </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;