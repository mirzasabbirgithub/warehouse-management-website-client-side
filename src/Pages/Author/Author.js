import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import munzerin from '../../images/munzerin.jpg';
const Author = () => {
          return (
                    <div>
                              <h2 className='text-info mt-5 mb-3'>Best Author Of The Week</h2>
                              <Container className='bg-light rounded'>
                                        <Row>
                                                  <Col><h2>We are annoucing the Author of this week,<br></br> <span className='text-success'> Munzerin Shahid</span></h2></Col>
                                                  <Col><img className='img-fluid' src={munzerin} alt="" /></Col>
                                                  <Col><p>Courage is not the absence of fear but rather the judgment that something is more important than fear.<br></br> - Munzerin Shahid</p></Col>
                                        </Row>
                              </Container>
                    </div>

          );
};

export default Author;