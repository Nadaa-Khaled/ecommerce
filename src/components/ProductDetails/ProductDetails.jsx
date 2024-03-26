import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Product from '../Product/Product'
import { storeContext } from '../../context/storeContext'

export default function ProductDetails() {
    let {counter,setCounter} = useContext(storeContext)

   let x = useParams()
   console.log(x)
   let [product,setProduct]=useState({})
   let [loading,setLoading]=useState(true)
async function getProduct(){
    let {data}= await axios.get (`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
    setProduct(data.data)
    setLoading(false)
}
useEffect(() => {
 getProduct()
}, [])
if(loading) return <Loading/>

  return (
    <>
    <div className="container my-5">
        <div className="row mt-5">
            <div className="col-md-3">
                <img src={product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-9 mt-5">
                <h4 className='mt-3'>{product.title}</h4>
                <p className='my-3'>{product.description}</p>
                <span>{product.category.name}</span>

                <div className='d-flex justify-content-between my-4'>
                    <div>
                        <div>
                           <p> {product.price} EGP</p>
                        </div>
                        </div>
                        <div>
                          <i className="fa-solid fa-star rating-color"></i>
                          {Product.ratingsAverage}
                        </div>
                    </div>
                    <button onClick={()=>setCounter(counter + 1)} className='btn bg-main w-100 text-white'>Add To Cart</button>
                </div>
            </div>

        </div>
   
    </>
  )
}
