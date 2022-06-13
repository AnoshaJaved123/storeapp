import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateitem } from '../Redux/features/itemSlice'
// import { useNavigate } from "react-router-dom";
import FormData from 'form-data'
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'


const Itemform = () => {
    const location = useLocation()
    const keyvalue = location.state.id
    const [values, setvalues] = useState({name:"", detail:"",price:0, location:"", picURL:""})
    // const {name, detail, location, picURL} = values;

    const dispatch =useDispatch();
    // const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('detail', values.detail);
        formData.append('price', values.price);
        formData.append('location', values.location);
        formData.append('picURL', values.picURL);
       
        dispatch(updateitem({keyvalue,formData}))
        console.log(keyvalue,values)

        setvalues({name:"", detail:"",price:0, location:"", picURL:""})

        // navigate('/item')
        window.location.href="/item"
    }
    const handleChange = (e) => {
      setvalues({...values, [e.target.name]: e.target.value});
  }

  const handlePhoto = (e) => {
      setvalues({...values, picURL: e.target.files[0]});

     
  }
  return (
    <>
     <Navbar/>
    <div className="container my-5">
   <div className="row ">
     <div className="col-md-8 offset-md-2">
     <div className="card my-1" style={{background:'#f95959'}}>
           <h2 className="text-center text-light mt-2" >Insert Item</h2>
           <div className="text-center mb-2 text-light">Office App</div>
         <form className="card-body cardbody-color p-lg-4" onSubmit={handleSubmit} method='put' action='/updateitem' encType="multipart/form-data">
           
           <div className="mb-3">
           <input 
                type="text"
                placeholder="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="form-control"
            />
           </div>
           <div className="mb-3">
             <input 
                type="text"
                placeholder="detail"
                name="detail"
                value={values.detail}
                onChange={handleChange}
                className="form-control"
            />
           </div>
           <label><small>Price</small></label>
           <div className="mb-3">
           <input 
                type="text"
                placeholder="price"
                name="price"
                value={values.price}
                onChange={handleChange}
                className="form-control"
            />
            </div>
           <div className="mb-3">
            <input 
                type="text"
                placeholder="location"
                name="location"
                value={values.location}
                onChange={handleChange}
                className="form-control"
            />
           </div>
           <div className="mb-3">
          <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="picURL"
                onChange={handlePhoto}
            />
           </div>
           
           <div className="text-center">
           <button  type="submit" className="btn btn-color px-5 mb-5 w-100">Add Item</button></div>

         </form>
         
       </div>
        
     </div>
   </div>
 </div>
 </>
  )
}

export default Itemform