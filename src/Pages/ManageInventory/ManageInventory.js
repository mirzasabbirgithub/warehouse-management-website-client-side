import React from 'react';
const ManageInventory = ({ item }) => {
          const { _id, name, img, description, price } = item;
          console.log(item)

          return (
                    <div className="card g-5 col-sm-12 col-md-6 col-lg-4">
                              <div style={{ width: "18rem" }}>
                                        < img className='card-img-top' src={img} alt="" />
                                        <div class="card-body">
                                                  <h5 className="card-title">{name}</h5>
                                                  <p className="card-text">Price:{price} BDT</p>
                                                  <p className="card-text">Description:{description}</p>
                                                  <button className='btn btn-success'>Delete</button>
                                        </div>
                              </div >
                    </div >
          );
};
export default ManageInventory;