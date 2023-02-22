import { useAuth } from '../hook';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
