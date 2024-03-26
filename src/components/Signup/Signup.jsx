import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Signup() {
let navigate=  useNavigate()
const [errMsg,setErrMsg]=useState('')
const [loading,setLoading] = useState(true)
 function sendDataToApi(values){
  setLoading(false)
 axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
 .then(({data})=>{
  console.log(data)
  if(data.message == 'success'){
    navigate('/signin')
  }
 
 }).catch((err)=>{
  setErrMsg(err.response.data.message)
  setLoading(true)

 })
  

  }

function validationSchema(){

  let schema = new Yup.object({
    name: Yup.string().min(2,'name must be at least 2 characters').max(20).required("name is a required field"),
    email: Yup.string().email().required(),
    password: Yup.string().matches(/^[A-Z][a-zA-Z0-9@]{6,}$/,"password must match").required(),
    rePassword: Yup.string().oneOf([Yup.ref("password")]).required(),

  })
  return schema
}
 
let register= useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',      
    rePassword:''
  },
 validationSchema,
  onSubmit:(values)=>{

    sendDataToApi(values)
  }

  }
)

  return (
    <div>
      <div className='w-75 m-auto my-5'>
        <h2>Register Now:</h2>
        <form onSubmit={register.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input value={register.values.name} onBlur={register.handleBlur} onChange={register.handleChange} type="text" name='name' className='form-control mb-3' id='name' />
          {register.errors.name && register.touched.name ?  <div className="alert alert-danger">{register.errors.name}</div>:''}
          <label htmlFor="email">Email:</label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="email" name='email' className='form-control mb-3' id='email' />
          {register.errors.email && register.touched.email ?<div className="alert alert-danger">{register.errors.email}</div>:''}

          <label htmlFor="password">Password</label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name='password'  className='form-control mb-3'  id='password'/>
          {register.errors.password && register.touched.password ?<div className="alert alert-danger">{register.errors.password}</div>:''}
          <label htmlFor="rePassword">rePassword</label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name='rePassword'  className='form-control mb-3'  id='rePassword'/>
          {register.errors.rePassword && register.touched.rePassword ?<div className="alert alert-danger">{register.errors.rePassword}</div>:''}
          {errMsg? <div className='alert alert-danger'>{errMsg}</div>:''}
          <button disabled={!(register.dirty&&register.isValid)} type='submit' className='btn bg-main text-white'>
            {loading ? 'Signup' :<i className='fa fa-spinner fa-spin'></i>}
          </button>
        </form>
      </div>
    </div>
  )
}
