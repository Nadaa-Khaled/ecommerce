import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/Product'
import { useQuery } from 'react-query'

export default function Products() {
  function getProducts(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  let {data,isLoading}= useQuery('getProducts', getProducts,{
    cacheTime:3000 
  })
  if (isLoading) return <Loading/>
  
  return (
  
    <>
    <div className="container my-5">
      <h3>All Products</h3>
      <div className="row">
       {data?.data.data.map(item =>{
        return  <Product item={item} key={item._id}/>
       })}
      </div>
    </div>
    
    </>
  )
}
