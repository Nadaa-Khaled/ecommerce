import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../../context/storeContext'
import { toast } from 'react-toastify'

export default function Product({item}) {
let {counter,setCounter,addToCart} = useContext(storeContext)
let {wishlist,setWishlist,addToWishlist} = useContext(storeContext)
let [btnLoading,setBtnLoading] = useState(true)


async function addProductToCart(productId){
  setBtnLoading(false)
 let data= await addToCart(productId)
 console.log(data)
 if(data.status=="success"){
  toast.success('Product added successfully to your cart')
  setCounter(data.numOfCartItems)
  setBtnLoading(true)

 }
}
 async function addProductToWishlist(e,productId){
  e.target.classList.replace('fa-regular','fa-solid')
  setBtnLoading(false)
 let data= await addToWishlist(productId)
 console.log(data)
 if(data.status=="success"){
  toast.success('Product added successfully to your wishlsit')
  setWishlist(data.count)
  setBtnLoading(true)

 }
 }


  return (
    <>
        <div className="col-md-2">
        
        <div className="product cursor-pointer rounded-3 p-3">
        <div className='d-flex justify-content-end'>
            {/* <i onClick={()=>setWishlist(wishlist + 1)} className="fa-regular fa-heart"></i> */}
            <i  onClick={(e)=>addProductToWishlist(e,item._id)} className="fa-regular fa-heart"></i>
            </div>
          <Link to={'/product-details/'+item._id}>
          
          <img src={item.imageCover} className='w-100' alt="" />
          <span className='text-main'>{item.category.name}</span>
          <h5 className='my-2 fw-bold'>{item.title.split(' ').splice(0,2).join(' ')}</h5>
          <div className='d-flex justify-content-between my-3'>
            <div>
              {item.price} EGP
            </div>
            <div>
            <i className="fa-solid fa-star rating-color"></i>
              {item.ratingsAverage}
            </div>
          </div>
          
          </Link>
          <button disabled={!btnLoading} onClick={()=>addProductToCart(item._id)} className='btn bg-main w-100 text-white'>
       
          {btnLoading?'Add To Cart' : 'loading...'}
          </button>
        </div>
      </div>
    </>
  )
}
