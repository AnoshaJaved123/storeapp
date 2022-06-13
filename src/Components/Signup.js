import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createuser} from '../Redux/features/signupSlice'
import {changename,changerole} from '../Redux/features/nameSlice'
import img2 from './Style/userss.jpg'
// import { id } from 'date-fns/locale';
const Signup = () => {

  const [nameuser, setnameuser] = useState("")
  const [roleuser, setroleuser] = useState("")


  const [values, setValues] = useState({name:"", email:"", password:"", role:"User"})
  const {name, email, password, role} = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesignup = (e)=>{
    e.preventDefault();
    dispatch(createuser({values}))
    dispatch(changename(nameuser))
    dispatch(changerole(roleuser))

  // console.log(nameuser)
    setValues({name:"", email:"", password:"", role:"User"})
    navigate('/login')
    console.log(nameuser)
  }



  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-5 offset-md-3">
         
          <div className="card my-2" style={{background:'#0e1c36'}}>
          <h2 className="text-center text-light mt-2" >Sign Up</h2>
          <div className="text-center mb-4 text-light">Shop Cart</div>
            <form className="card-body cardbody-color p-lg-2">
              <div className="text-center">
                <img src={img2} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-2 " width="150px" alt="profile" />
              </div>
              <div className="mb-3">
                <input value={name} onChange={(e)=>{setValues({...values,name:e.target.value}); setnameuser(e.target.value)}} type="text" className="form-control" id="name" placeholder="name" />
              </div>
              <div className="mb-3">
                <input value={email} onChange={(e)=>{setValues({...values,email:e.target.value})}} type="text" className="form-control" id="Username" aria-describedby="emailHelp" placeholder="email" />
              </div>
                 <label htmlFor="exampleFormControlSelect1 mx-1 my-2">Select Role</label>
                 <div className="mb-3 text-dark">
                 <select value={role} onChange={(e)=>{setValues({...values,role:e.target.value}); setroleuser(e.target.value)}} className="form-control " placeholder="Select Role"  >
                     <option value='User'>User</option>
                     <option value='Admin'>Admin</option>
                     <option value='User'>User</option>
                    

                 </select>
             </div>            
              <div className="mb-2">
                <input  value={password} onChange={(e)=>{setValues({...values,password:e.target.value})}}  type="password" className="form-control" id="password" placeholder="password" />
              </div>
              <div onClick={handlesignup} className="text-center"><button  type="submit" className="btn btn-color px-5 mb-5 w-100">Sign Up</button></div>
              <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already Registered? <a href="/" className="text-dark fw-bold">Click to Login..</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Signup