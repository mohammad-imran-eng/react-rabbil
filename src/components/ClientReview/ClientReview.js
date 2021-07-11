import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../asset/images/client.png'
import img1 from '../../asset/images/courses.jpg'
import img2 from '../../asset/images/review.jpg'

class ClientReview extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={img} alt="" />
                                    <h1 className="courseTitle mt-2">Web Development</h1>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur tempora non optio. Ipsum, ut obcaecati? Illo vero doloremque asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis incidunt vitae accusamus cumque vero assumenda molestiae voluptate ab dicta?</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={img1} alt="" />
                                    <h1 className="courseTitle mt-2">Web Development</h1>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur tempora non optio. Ipsum, ut obcaecati? Illo vero doloremque asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis incidunt vitae accusamus cumque vero assumenda molestiae voluptate ab dicta?</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={img2} alt="" />
                                    <h1 className="courseTitle mt-2">Web Development</h1>
                                    <p className="courseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur tempora non optio. Ipsum, ut obcaecati? Illo vero doloremque asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis incidunt vitae accusamus cumque vero assumenda molestiae voluptate ab dicta?</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;