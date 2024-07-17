import React, { useState } from 'react'
import axios from "axios"




const CreateHotel = () => {
    const [name ,setname]= useState('')
    const [description ,setdescription]= useState('')
    const[rating,setrating]=useState(false)
    const[imageUrl,setimageUrl]=useState('')

axios.post('http://localhost:3000/hotel/add',{name:name,imageUrl:imageUrl,desciption:description,rating:rating})
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err);})

  return (
   
<div>

         
            <input type="text" placeholder='name'  onChange={()=>(name)}/>
            <button style={{ border: 'padding: 10pxnone', color: 'black', display: 'inline-block', cursor: 'pointer',display: 'inline-block'}}>Create</button>
           
            <input type="text"  />
           <button > </button>
    
      
    </div>
  )
}

export default CreateHotel
