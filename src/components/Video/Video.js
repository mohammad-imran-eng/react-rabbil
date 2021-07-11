import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import "video-react/dist/video-react.css"
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
    constructor() {
        super();
        this.state = {
            show: false

        }
    }
    modalClose = () => this.setState({ show: false })
    modalOpen = () => this.setState({ show: true })
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">How I Do</p>
                                <p className="videDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, alias hic! Quia quod laudantium unde porro officia perferendis doloremque rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolorum velit ducimus in laudantium minus natus doloribus similique reprehenderit ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel minus odio cumque aperiam recusandae ad magni error placeat distinctio! </p>
                                <p> <FontAwesomeIcon onClick={this.modalOpen} icon={faPlayCircle} className="playButton" /> </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="https://youtu.be/gviAd_TlhIQ" />
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Button variant="info" onClick={this.modalClose}>Close</Button>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;