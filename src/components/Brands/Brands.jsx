import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { useQuery } from 'react-query'
import Brand from '../Brand/Brand'

export default function Products() {
  function GetBrand(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
  let {data,isLoading}= useQuery('GetBrand', GetBrand,{
    cacheTime:3000 
  })
  if (isLoading) return <Loading/>
  
  return (
  
    <>
    <div className="container my-5">
      <h3>All Brands</h3>
      <div className="row">
       {data?.data.data.map(item =>{
        return  <Brand item={item} key={item._id}/>
       })}
      </div>
    </div>
    
    </>
  )
}
