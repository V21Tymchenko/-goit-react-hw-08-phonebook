import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const PublickRouter = ({ restricted = false, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(authSelectors.getLoggedIn);
  const shouldRedirect = IsLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />}</>;
};
export default PublickRouter;
