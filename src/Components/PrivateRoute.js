import React from 'react'
import { useSelector } from 'react-redux'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoute = () => {
    const location =useLocation();
    const userrole = useSelector((state) => state.appname.userrole)
    console.log(userrole)
    // const auth=userrole
  return (
<>

               { location.state.id === 'Admin' ? <Outlet /> :<Navigate to="/login" />}

</>


  )
}

export default PrivateRoute



// const PrivateRoute = ({childres, ...rest}) => {
//     const auth=true
//   return (
//       <Routes>
//     <Route {...rest} render={()=>auth?(Children):(<Navigate to={'/'}/>)}/>
//     </Routes>
//   )
// }