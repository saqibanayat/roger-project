import {Navigate, Outlet, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';

const CSPAdmin = () => {
    const location = useLocation();
    const {user}=useSelector(state=>state.auth)

  return (
  user?.getUserRole ==='service_provider' ?<Outlet />:<Navigate to='/page-not-found' state={{location}} replace />
  )
}

export default CSPAdmin