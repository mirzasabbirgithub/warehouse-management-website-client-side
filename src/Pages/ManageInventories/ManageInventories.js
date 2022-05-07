import React from 'react';
import useData from '../Hooks/useData';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
          const [items, setItems] = useData([]);

          const handleDelete = id => {
                    const proceed = window.confirm('Are you sure to detele the item?');
                    if (proceed) {
                              const url = `http://localhost:5000/item/${id}`;
                              fetch(url, {
                                        method: 'DELETE'
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  console.log(data);
                                                  const remaining = items.filter(item => item._id !== id);
                                                  setItems(remaining);
                                        })
                    }
          }
          return (
                    <div className='container' >
                              <h3 className='mt-2'>Total Items: {items.length}</h3>
                              <div className="row">
                                        {
                                                  items.map(item => <ManageInventory
                                                            key={item.id}
                                                            item={item}
                                                            handleDelete={handleDelete}
                                                  >
                                                  </ManageInventory>)
                                        }
                              </div>
                    </div >
          );
};

export default ManageInventories;