import React from 'react'

const Spinner = () => {
  return (
    <div>
   <div className="spinner-border m-5 " style={{width: "3rem", height: "3rem"}}  role="status">
  <span className="visually-hidden">Loading...</span>
</div>

    </div>
  )
}

export default Spinner