import React from 'react'
import { useState } from 'react'

export const Another = () => {
    const [main,setmain]=useState([]);
   const[data,setdata]=useState({
    name:"",
    email:"",
    password:"",
   });

   const handlechange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value});
        e.target.name.value="";
        e.target.email.value="";
        e.target.password.value="";
        setdata("");
      
      
   }
     
   const handlesubmit=(e)=>{
       e.preventDefault();
       setmain([...main,data]);
       console.log(data);
       setdata({name:"",password:"",email:""});
        
    
   }

   const del=(ind)=>{
          setmain(main.filter((value,index)=>index!=ind));
   }

   const upd=(val,ind)=>{
   
       setmain(main.filter((value,index)=>index==ind))
      
       
      
      

        
   }
   console.log(main);

     

  return (
    <>

<div className="container mt-5">
    <div className="row">
        <div className="col-md-6 mx-auto ">
        <form onSubmit={handlesubmit}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
    <input type="text" onChange={handlechange} value={data.name? data.name:"" } name="name" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" onChange={handlechange} value={data.email } name="email" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={data.password }  onChange={handlechange} name="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary w-100 ">Submit</button>
</form>
    
        </div>
    </div>
</div>


<table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Password</th>
      <button className='btn-btn-danger'>Delete</button>
    </tr>
  </thead>
  <tbody>
    {
        main.map((val,ind)=>{
           
            return(
                <tr key={ind}>
      <th scope="row">{ind.length}</th>
      <td>{val.name}</td>
      <td>{val.email}</td>
      <td>{val.password}</td>
      <td><button onClick={()=>del(ind)} className='btn btn-danger'>Delete</button></td>
       <td><button onClick={()=>upd(val,ind)} className='btn btn-success'>Update</button></td>
    </tr>
                
            );
        })
    }
    
    
  </tbody>
</table>
    
    </>
  )
}
