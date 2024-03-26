import axios from "axios";
import { useState } from "react";
import { createContext } from "react";



export let storeContext = createContext(0)

async function addToCart(productId){
   return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId},{
    headers:{
      token:localStorage.getItem('token')
    }
   }).then(({data})=>data).catch(err=>err)
}
async function getCart(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
     headers:{
       token:localStorage.getItem('token')
     }
    }).then(({data})=>data).catch(err=>err)
 }
 async function deleteItem(productId){
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId,{
     headers:{
       token:localStorage.getItem('token')
     }
    }).then(({data})=>data).catch(err=>err)
 }
 async function updataQTY(productId,count){
    return axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId,{count},{
     headers:{
       token:localStorage.getItem('token')
     }
    }).then(({data})=>data).catch(err=>err)
 }



 async function pay(cartId,shippingAddress){
    return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId,{shippingAddress},{
     headers:{
       token:localStorage.getItem('token')
     }
    }).then(({data})=>data).catch(err=>err)
 }
 async function addToWishlist(productId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId},{

     headers:{
       token:localStorage.getItem('token')
     }
    }).then(({data})=>data).catch(err=>err)
 }
 async function getWishlist(){
     return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
      headers:{
        token:localStorage.getItem('token')
      }
     }).then(({data})=>data).catch(err=>err)
  }

export default function StoreContextProvider({children}) {
    let [counter,setCounter] = useState(0)
    let [wishlist,setWishlist] = useState(0)
    
  return  <storeContext.Provider value={{counter,setCounter,wishlist,setWishlist,addToCart,
    getCart,
    deleteItem,
    updataQTY,
    pay,
    getWishlist,
    addToWishlist
  
  }}>
        {children}
    </storeContext.Provider>


}
