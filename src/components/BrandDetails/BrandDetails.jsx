import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { storeContext } from '../../context/storeContext'

export default function BrandDetails() {

   let x = useParams()
   console.log(x)
   let [brand,setBrand]=useState({})
   let [loading,setLoading]=useState(true)
async function getBrand(){
    let {data}= await axios.get (`https://ecommerce.routemisr.com/api/v1/brands/${x.idd}`)
    setBrand(data.data)
    console.log(data.data)
    setLoading(false)
}
useEffect(() => {
    getBrand()
}, [])
if(loading) return <Loading/>

  return (
    <>
    <div className="container my-5">
        <div className="row mt-5">
            <div className="col-md-3">
                <img src={brand.image} className='w-100' alt="" />
            </div>
                <h4 className='mt-3 text-main'>{brand.name}</h4>
               
                
            </div>

        </div>
   
    </>
  )
}
