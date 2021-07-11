import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Area } from 'recharts';

class Analysis extends Component {

    constructor() {
        super()
        this.state = {
            data: [

                { technology: 'Java', project: 100 },
                { technology: 'Kotlin', project: 40 },
                { technology: 'Sql', project: 90 },
                { technology: 'IP', project: 95 },
                { technology: 'Jquery', project: 60 },
                { technology: 'React', project: 90 },
                { technology: 'PHP', project: 100 },
                { technology: 'Angular', project: 65 },
            ]
        }
    }


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{ width: '100%', height: '300px' }} lg={6} md={12} sm={12}>

                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="technology" />
                                    <YAxis dataKey="project" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="project" stroke="#8884d8" fill="#8884d8" />
                                    <Bar dataKey="project" fill="rgb(5, 226, 255)" />
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify desc">
                                Explicabo aliquid, consectetur qui laboriosam veritatis quisquam ullam aperiam. Ipsum quae nobis eos ratione iure quod molestias perspiciatis unde aut corrupti nulla odit maiores voluptatem, a numquam beatae sint fugit qui, officiis reiciendis minima. Modi quasi doloribus dignissimos nostrum odio, voluptatum ducimus illo et sapiente, neque voluptate consequatur minima libero iure deleniti nulla omnis. Minus autem possimus, nesciunt laboriosam vitae excepturi, ex esse aut molestias cumque debitis molestiae vero nostrum? At, fuga. Soluta quo quibusdam praesentium minima nemo pariatur cupiditate dicta! Ut, omnis eaque et laborum corrupti deserunt repudiandae tenetur animi quae consequuntur totam iste, nesciunt quis. Dicta quis repudiandae eveniet cupiditate eligendi fugit provident similique corrupti, nulla perferendis minima ipsum incidunt dignissimos quidem dolorum doloremque sequi asperiores debitis? Dolorum repudiandae eveniet sequi alias eaque magni! Beatae dolore quasi nisi eius. Ab, reprehenderit! Odit nobis, id officiis explicabo quod odio non libero, adipisci sequi ipsa ipsum cumque.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        );
    }
}

export default Analysis;