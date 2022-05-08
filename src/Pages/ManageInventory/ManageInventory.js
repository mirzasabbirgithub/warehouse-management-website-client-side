import React, { useRef } from 'react';
const ManageInventory = ({ id, item, handleDelete }) => {
          const { _id, name, img, description, price } = item;


          return (
                    <div className="card g-5 col-sm-12 col-md-6 col-lg-4">
                              <div style={{ width: "18rem" }}>
                                        < img className='card-img-top' src={img} alt="" />
                                        <div class="card-body">
                                                  <h5 className="card-title">{name}</h5>
                                                  <p className="card-text">Price: {price} BDT</p>
                                                  <p className="card-text">Description: {description}</p>
                                                  <button onClick={() => handleDelete(item._id)} className='btn btn-success'>Delete</button>
                                        </div>
                              </div >
                    </div >
          );
};
export default ManageInventory;