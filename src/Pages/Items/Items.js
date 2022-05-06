import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {

          const [items, setItems] = useState([]);
          useEffect(() => {
                    fetch('http://localhost:5000/item')
                              .then(res => res.json())
                              .then(data => setItems(data));
          }, [])
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
                    </div>

          );
};

export default Items;