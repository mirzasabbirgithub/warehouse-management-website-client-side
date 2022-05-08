import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';


const Header = () => {
          const [user] = useAuthState(auth);
          const handleSignOut = () => {
                    signOut(auth);
          }

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

                                                                      {
                                                                                user ?
                                                                                          <Nav>
                                                                                                    <Nav.Link as={Link} to="manageinventories">Manage Inventories</Nav.Link>
                                                                                                    <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                                                                                    <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                                                                                                    <Nav.Link>{user.email}</Nav.Link>
                                                                                                    <Nav.Link className='btn btn-primary text-white' onClick={handleSignOut}>Sign Out</Nav.Link>
                                                                                          </Nav>
                                                                                          :
                                                                                          <Nav.Link as={Link} to="login">Login</Nav.Link>
                                                                      }

                                                            </Nav>
                                                  </Navbar.Collapse>
                                        </Container>
                              </Navbar>

                    </>
          );
};

export default Header;