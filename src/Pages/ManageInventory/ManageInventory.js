import React from 'react';
import useData from '../Hooks/useData';
import ManageInventories from '../ManageInventories/ManageInventories';

const ManageInventory = () => {
          const [items, setItems] = useData([]);
          return (
                    <div className='container' >
                              <div className="row">
                                        {
                                                  items.map(item1 => <ManageInventories
                                                            key={item1.id}
                                                            item1={item1}
                                                  >
                                                  </ManageInventories>)
                                        }
                              </div>
                    </div>
          );
};

export default ManageInventory;