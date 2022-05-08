import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import useData from '../Hooks/useData';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

const Items = () => {

          const [items, setItems, loading] = useData([]);

          if (loading) {
                    return <Loading></Loading>
          }
          const navigateToManageInventories = event => {
                    Navigate('/manageinventories');
          }
          return (

                    <div className='container gx-5' >
                              <h1 className='text-info text-center mt-2'>Available Books</h1>
                              <div className="row">
                                        {
                                                  items.slice(0, 6).map(item => <Item
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