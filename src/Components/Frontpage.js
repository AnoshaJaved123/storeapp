import React from 'react'
import img3 from '../Components/Style/77.jpg'
import style from '../Components/Style/style.css'

const Frontpage = () => {

    // var url = img3;
 
    // var div = document.getElementById("container-main");
    // div.style.backgroundImage = `url(${url})`;
    // document.body.style.width = "640px";
    // document.body.style.height = "374px";
    // document.body.style.backgroundImage = `url(${img3})`;


  return (
      <>

    <div className="flex-parent jc-center">
    <button type="submit">USER</button>
  </div>
  
  <div className="flex-parent jc-center">
    <button type="submit">ADMIN</button>
  </div>
      </>
  )
}

export default Frontpage