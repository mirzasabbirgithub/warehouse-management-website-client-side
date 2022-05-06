import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
          return (
                    <div className='blogs'>
                              <div>
                                        <h2>Blogs</h2>
                              </div>

                              <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                                  <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                                                  <Accordion.Body>
                                                            teststststsst
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                                  <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                                                  <Accordion.Body>

                                                            tetetetetetetet
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                                  <Accordion.Header>What is the purpose of jwt and how does it work</Accordion.Header>
                                                  <Accordion.Body>
                                                            tetstetetetetetststetet
                                                  </Accordion.Body>
                                        </Accordion.Item>
                              </Accordion>
                    </div>
          );
};

export default Blogs;