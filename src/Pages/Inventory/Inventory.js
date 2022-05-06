import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
          const { itemId } = useParams();
          const [item, setItem] = useState({});

          useEffect(() => {
                    const url = `http://localhost:5000/item/${itemId}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setItem(data));

          }, [])
          return (
                    <div >
                              <h2>Welcome to Inventory Page</h2>
                              <Card className='mx-auto w-50' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                                  <Card.Title>{item.name}</Card.Title>
                                                  <Card.Text>
                                                            Price:{item.price} BDT
                                                  </Card.Text>
                                                  <Button className='mb-2' variant="primary">Delivered</Button><br></br>
                                                  <Button variant="primary">Restock</Button>
                                        </Card.Body>
                              </Card>
                    </div>
          );
};

export default Inventory;