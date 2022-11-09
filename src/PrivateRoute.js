import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const PriveteRout = () => {
  const IsLoggedIn = useSelector(authSelectors.getLoggedIn);
  return <>{IsLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};
export default PriveteRout;
