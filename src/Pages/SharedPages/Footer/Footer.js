import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();
          return (

                    <footer className=' text-center text-white'>
                              <Container className='bg-dark'>
                                        <Row>
                                                  <Col><span className='text-info'>Books Warehouse </span>  </Col>
                                                  <Col><h5>Copyright &copy; {year}</h5></Col>
                                                  <Col>Contact: dbtester@yahoo.com</Col>
                                        </Row>
                              </Container>

                    </footer>
          );
};

export default Footer;