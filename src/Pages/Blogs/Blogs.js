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
                                                            Javascript is a programming langauge to write script, On the other hand node.js is a run time enviroment.  Node.js used to run server. Javascript only used in broweser, but node.js used also outside of the browser. Javascript is a client side but Node.js is a server side.
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                                  <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                                                  <Accordion.Body>
                                                            Sql is a relational database management system, NoSql is non-relational database management system. Sql is vertical scalable, NoSql is horizontal scalable. Sql maintain fixed schemas but NoSql maintain dynamic schemas. For complex data queries SQL is better option, but NoSQL is not good for complex data queries.
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                                  <Accordion.Header>What is the purpose of jwt and how does it work</Accordion.Header>
                                                  <Accordion.Body>
                                                            JWT means JSON WEB TOKEN, JWT is a standarded way to share security information beetween server and clinent. Jwt follows cryptiographic algorithm to secure information.

                                                            Jwt generate a secret private key. Whenever we get jwt from client we need to varify secret key stored in server. Its a better way to secure authentications.
                                                  </Accordion.Body>
                                        </Accordion.Item>
                              </Accordion>
                    </div>
          );
};

export default Blogs;