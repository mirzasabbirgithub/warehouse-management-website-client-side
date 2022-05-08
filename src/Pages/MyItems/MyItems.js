import React from 'react';
import useData from '../Hooks/useData';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
          const [items, setItems] = useData([]);

          //handle delete button
          const handleDelete = id => {
                    const proceed = window.confirm('Are you sure to detele the item?');
                    if (proceed) {
                              const url = `https://blooming-wave-81568.herokuapp.com/item/${id}`;
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
                              <h2 className='text-success'>My Item Page</h2>
                              <h3 className='mt-2'>Total Items: {items.length}</h3>
                              <div className="row">
                                        {
                                                  items.map(item => <MyItem
                                                            key={item.id}
                                                            item={item}
                                                            handleDelete={handleDelete}
                                                  >
                                                  </MyItem>)
                                        }
                              </div>
                    </div >
          );
};
export default MyItems;