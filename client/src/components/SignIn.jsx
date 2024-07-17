import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate=useNavigate()

    const[password,setpassword]=useState('')
    const[email,setemail]=useState('')
    axios.get("http://localhost:3000/user/getall")
    .then((res)=>{res.data.map((e)=>{
        if(e.email===email && e.password===password){
            navigate("/home")
        }
    })})
  
  return (
    <div>
      <input type="text" onChange={(e)=>setemail(e.target.value)} />
      <input type="text" onChange={(e)=>setpassword(e.target.value)} />
    </div>
  )
}

export default SignIn
