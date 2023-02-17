import {Navigate, Outlet, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';

const RequiredLogin = ({allowRole}) => {
    const location = useLocation();
    const {user}=useSelector(state=>state.auth)


  return (
    <>
  {(allowRole===user?.getUserRole) ?<Outlet /> : <Navigate to='/login' state={{from:location}} replace />} 
 
  </>
  )
}

export default RequiredLogin