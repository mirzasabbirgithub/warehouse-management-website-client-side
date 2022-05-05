import React from 'react';
import { Carousel } from 'react-bootstrap';
import booksbanner from '../../images/booksbanner.jpg';
const Banner = () => {
          return (
                    <div className='mx-auto' >
                              <Carousel>
                                        <Carousel.Item>
                                                  <img
                                                            className="img-fluid. max-width: 100% d-block w-100"
                                                            src={booksbanner}
                                                            alt="First slide"
                                                  />
                                                  <Carousel.Caption>
                                                            <h2>Books Warehouse Management</h2>
                                                            <p></p>
                                                  </Carousel.Caption>
                                        </Carousel.Item>
                              </Carousel>
                    </div>
          );
};

export default Banner;