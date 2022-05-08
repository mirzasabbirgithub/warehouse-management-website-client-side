import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
          const { register, handleSubmit } = useForm();
          const onSubmit = data => {
                    const url = `https://blooming-wave-81568.herokuapp.com/item`;
                    fetch(url, {
                              method: 'POST',
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(data)
                    })
                              .then(res => res.json())
                              .then(result => {
                                        console.log(result);
                              })
          };


          return (
                    <div className='w-50 mx-auto'>
                              <h2>Please Add New Item</h2>
                              <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                        <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                                        <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                        <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                                        <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                                        <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
                                        <input className='mb-2' placeholder='Sold' type="number" {...register("sold")} />
                                        <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                                        <input className='bg-info text-white' type="submit" value="Add Item" />
                              </form>
                    </div>
          );
};

export default AddItem;