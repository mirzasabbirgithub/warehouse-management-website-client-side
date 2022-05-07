import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import book1 from '../../images/book1.jpeg';
const Extra = () => {
          return (
                    <div className='mt-5'>
                              <Container>
                                        <Row>
                                                  <Col>
                                                            <img className='img-fluid' src={book1} alt="" />
                                                  </Col>
                                                  <Col>
                                                            <h3 className='text-secondary'>Special Offers</h3>
                                                            <h1 className='text-danger'>Get 30% Discount in all type of Books</h1>
                                                            <p>This offer valid till October 2022</p>
                                                            <Button>Click Here to Buy</Button>
                                                  </Col>

                                        </Row>
                              </Container>

                    </div>
          );
};

export default Extra;