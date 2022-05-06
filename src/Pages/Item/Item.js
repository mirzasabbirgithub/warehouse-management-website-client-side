import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {
          const { _id, name, img, description, price } = item;
          const navigate = useNavigate();

          const navigateToCheckout = id => {
                    navigate(`/inventory/${id}`);
          }

          return (
                    <div className="card g-5 col-sm-12 col-md-6 col-lg-4">
                              <div style={{ width: "18rem" }}>
                                        < img className='card-img-top' src={img} alt="" />
                                        <div class="card-body">
                                                  <h5 className="card-title">{name}</h5>
                                                  <p className="card-text">Price:{price} BDT</p>
                                                  <p className="card-text">Description:{description}</p>
                                                  <button onClick={() => navigateToCheckout(_id)} className='btn btn-success'>Stock Update</button>
                                        </div>
                              </div >
                    </div >
          );
};

export default Item;