import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Brand({item}) {





  return (
    <>
        <div className="col-md-2">
        
        <div className="product cursor-pointer rounded-3 p-3">
        <div className='d-flex justify-content-end'>
            </div>
          <Link to={'/brand-details/'+item._id}>
          
          <img src={item.image} className='w-100' alt="" />
          <p className='text-main text-center'>{item.name}</p>
         
           
         
          
          </Link>
       
        </div>
      </div>
    </>
  )
}
