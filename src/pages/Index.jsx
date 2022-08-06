import React from 'react'
import { useState } from 'react'
import { Nav } from '../componants/Nav'

export const Index = () => {
  const[nam,setname]=useState("");
  const[emai,setemail]=useState("");
  
  const handleChangename=(e)=>{
    setname(e.target.value);
   
    

  }
  const handleChangeemail=(e)=>{
    setemail(e.target.value);
   
    

  }
  // const email=(e)=>{
  //   setemail(e.target.value);
    

  // }
  // const sub=(e)=>{
  //   e.preventDefault();
  //   console.log(emai);
  //   console.log(nam);
  // }

  return (
    <>
    <Nav />


     <div className="container mt-5">


         <div className="row">
            <div className="col md-6 mx-auto">

            <form>
  <div className="mb-3 mt-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter your Name</label>
    <input type="text" onChange={handleChangename} value={nam} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" onChange={handleChangeemail} value={emai} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={sub} className="btn btn-primary w-100">Submit</button>
</form>
            </div>
         </div>
             
     </div>



     </>

  )
}
