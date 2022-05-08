import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
          const { itemId } = useParams();
          const [item, setItem] = useState({});
          const [sold, setSold] = useState();

          useEffect(() => {
                    const url = `http://localhost:5000/item/${itemId}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setItem(data));
          }, []);


          //delivered update
          const handleDelivered = event => {
                    const quantity = parseInt(item.quantity);
                    const result = quantity - 1;
                    const NewQuantity = { result };


                    const url = `http://localhost:5000/item/${itemId}`;
                    fetch(url, {
                              method: "PUT",
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(NewQuantity)
                    })
                              .then(res => res.json())
                              .then(data => {
                                        console.log('success', data)
                              })
                    window.location.reload();
          }


          //restock
          const quantityRef = useRef("")
          const handleRestock = event => {
                    const previousQuantity = parseInt(item.quantity);
                    const gotQuantity = quantityRef.current.value;
                    const reStock = parseInt(gotQuantity);
                    const result = previousQuantity + reStock;
                    const updateStock = { result };

                    const url = `http://localhost:5000/item/${itemId}`;
                    fetch(url, {
                              method: "PUT",
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(updateStock)
                    })
                              .then(res => res.json())
                              .then(data => {
                                        console.log('success', data)
                              })
                    window.location.reload();
          }


          return (
                    <div >
                              <h2>Selected Item</h2>
                              <Card className='mx-auto w-50' style={{ width: '18rem' }}>
                                        <Card.Img className='img-fluid mx-auto w-50 ' variant="top" src={item.img} />

                                        <Card.Body>
                                                  <Card.Title className='text-success'>{item.name}</Card.Title>
                                                  <Card.Text>Description: {item.description}</Card.Text>
                                                  <Card.Text>Price: {item.price} BDT</Card.Text>
                                                  <Card.Text>Quantity: <span className='text-danger'>{item.quantity}</span></Card.Text>
                                                  <Card.Text>Supplier: {item.supplier}</Card.Text>
                                                  <Button onClick={handleDelivered} className='mb-2' variant="primary">Delivered</Button><br></br>

                                                  <form>
                                                            <input ref={quantityRef} type="number" name="quantity" placeholder='Quantity' required />
                                                            <br />
                                                            <input onClick={handleRestock} type="submit" value="Update Quantity" />
                                                  </form>

                                        </Card.Body>

                              </Card>
                              <div>

                              </div>
                    </div>
          );
};

export default Inventory;