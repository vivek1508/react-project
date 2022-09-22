import React from 'react';
import { useState } from 'react';

const Contect = () => {

const[val,setval]=useState({
  tex:'',
  email:'',
  pas:'',
});
// const[num, setnum]=useState();



const submi =(ra)=>{
  ra.preventDefault();
  alert(`  ${val.tex} 
  ${val.email}
  ${val.pas}`)
}

const ww =(qq)=>{
     const{name,value}=qq.target;
     setval((se)=>{
      return{
        ...se,
        [name]:value ,
      }
     })
}

  return (
    <>
    <div className="container col-4 pt-5 ">
      {/* <div className="rer"> */}
    <form onSubmit={submi}  className='row d-flex justify-content-center'>
      <div className="pt-3">
    <input  type="text" placeholder='Enter your name' onChange={ww} class="form-control" 
    name='tex' 
    value={val.tex} />
    </div>
      <div className="pt-3">
    <input  type="email" placeholder='Enter your Email' onChange={ww} class="form-control" 
    name='email' 
    value={val.email} />
    </div>
    <div className="pt-3">
    <input  type="password" placeholder='Enter your password ' onChange={ww} class="form-control" 
    name='pas' 
    value={val.pas} />
    </div>
    <div className="pt-3 d-flex justify-content-center">
  <button  type='submit' class="btn btn-outline-primary">Submit</button>
  </div>
</form>
{/* </div> */}
</div>
    </>
  )
}

export default Contect;
