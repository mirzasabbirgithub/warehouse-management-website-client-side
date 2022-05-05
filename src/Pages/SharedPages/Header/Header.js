import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
          return (
                    <>
                              <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                                        <Container>
                                                  <Navbar.Brand as={Link} to="home">Books Warehouse</Navbar.Brand>
                                                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                  <Navbar.Collapse id="responsive-navbar-nav">
                                                            <Nav className="me-auto">
                                                                      <Nav.Link as={Link} to="home">Home</Nav.Link>
                                                                      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                                                            </Nav>
                                                            <Nav>
                                                                      <Nav.Link as={Link} to="additem">Inventory</Nav.Link>
                                                                      <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                                                      <Nav.Link as={Link} to="login">Login</Nav.Link>


                                                            </Nav>
                                                  </Navbar.Collapse>
                                        </Container>
                              </Navbar>

                    </>
          );
};

export default Header;