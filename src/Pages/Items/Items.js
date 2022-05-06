import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import useData from '../Hooks/useData';
import Item from '../Item/Item';

const Items = () => {

          const [items, setItems] = useData([]);

          const navigateToManageInventories = event => {
                    Navigate('/manageinventories');
          }
          return (

                    <div className='container' >
                              <h1 className='text-primary text-center mt-2'>Current Items</h1>
                              <div className="row">
                                        {
                                                  items.map(item => <Item
                                                            key={item.id}
                                                            item={item}
                                                  >
                                                  </Item>)
                                        }

                              </div>
                              <Button className='mt-2'><Link to="/manageinventories" className='text-white pe-auto text-decoration-none' onClick={navigateToManageInventories} >Manage Inventories</Link></Button>
                    </div>

          );
};

export default Items;