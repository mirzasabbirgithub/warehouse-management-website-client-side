import React from 'react';
import useData from '../Hooks/useData';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
          const [items, setItems] = useData([]);
          return (
                    <div className='container' >
                              <h3 className='mt-2'>Total Items: {items.length}</h3>
                              <div className="row">
                                        {
                                                  items.map(item => <ManageInventory
                                                            key={item.id}
                                                            item={item}
                                                  >
                                                  </ManageInventory>)
                                        }
                              </div>
                    </div>
          );
};

export default ManageInventories;