import React,{useState} from 'react'
import img1 from './Style/lock.png'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
  localStorage.clear()
  const [values, setValues] = useState({email:"", password:""})
  const {email, password} = values

  const navigate = useNavigate();




  const handlelogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/userAuth/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ email: values.email, password: values.password}) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);// shown on Application Localstorage area
      localStorage.setItem('email', json.user.email);// shown on Application Localstorage area
      localStorage.setItem('_id', json.user._id);// shown on Application Localstorage area
     localStorage.setItem('name', json.user.name);// shown on Application Localstorage area
     toast("Welcome Admin:",localStorage.getItem('name'));
      navigate('/item');

    } 
    else{
      toast("Welcome User");
      navigate('/publicitems')
    }
    // else {
    //   toast("Invalid Credentials...");
    
    // }

  }


  // const handlelogin = (e)=>{
  //   e.preventDefault();
  //   dispatch(createlogin({values}));
  //   console.log(values)
  //   navigate('/item')
  //   setValues({email:"", password:""})    
  // }

 


  return (
    <>
          <ToastContainer position="bottom-right" toastStyle={{ backgroundColor: "#0e1c36", color: "white" }} />

   <div className="container">
  <div className="row">
    <div className="col-md-4 offset-md-4">
    <div className="card my-5" style={{background:'#0e1c36'}}>
    <h2 className="text-center text-light mt-2" >Log in</h2>
    <div className="text-center mb-3 text-light">Shop Cart</div>
    <div className="text-center mb-3 text-light">Create Account to Access Admin</div>

    <form className="card-body cardbody-color p-lg-2">
          <div className="text-center">
          <img src={img1} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-2 " width="150px" alt="profile" />
          </div>
          <div className="mb-3">
            <input value={email} onChange={(e)=>{setValues({...values,email:e.target.value})}} type="text" className="form-control" id="Username" aria-describedby="emailHelp" placeholder="User Name" />
          </div>
          <div className="mb-3">
            <input value={password} onChange={(e)=>{setValues({...values,password:e.target.value})}} type="password" className="form-control" id="password" placeholder="password" />
          </div>
         
          <div className="text-center">
          <button onClick={handlelogin} type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
          <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
            Registered? <a href="/signup" className="text-dark fw-bold"> Create an
              Account</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default Login