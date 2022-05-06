import React from 'react';
import useData from '../Hooks/useData';
import ManageInventories from '../ManageInventories/ManageInventories';

const ManageInventory = () => {
          const [items, setItems] = useData([]);
          return (
                    <div className='container' >
                              <div className="row">
                                        {
                                                  items.map(item => <ManageInventories
                                                            key={item.id}
                                                            item={item}
                                                  >
                                                  </ManageInventories>)
                                        }
                              </div>
                    </div>
          );
};

export default ManageInventory;