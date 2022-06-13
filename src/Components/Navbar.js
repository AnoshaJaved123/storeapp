import React from 'react'

import {Link} from "react-router-dom";
const Navbar = (props) => {

  const name= localStorage.getItem('name');// shown on Application Localstorage area

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SHOP CART</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {
            localStorage.getItem('token')?
            <>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dashboard">DASHBOARD</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/item">ITEMS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Itemform">ADD ITEM</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cal">CALENDAR</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preview"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/updateitem"></Link>
            </li>

            </>
            :
            <>

            <li className="nav-item">
              <Link className="nav-link" to="/publicitems">PUBLIC ITEMS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cal">CALENDAR</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/previewpublic"></Link>
            </li>
            </>
          }
           
          <li className="nav-item">
              <Link className="nav-link" to="/mainpage"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login"></Link>
            </li>


          </ul>
          
          <p className='btn-color my-1 mx-1'> {name}  </p>
          <Link className="btn btn-sm  btn-light mx-1" to="/" role="button">Logout</Link>
       

        </div>
      </div>
    </nav>

  </div>

  )
}

export default Navbar