import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';

const AppBar = lazy(() => import('pages/AppBar/AppBar'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const PriveteRout = lazy(() => import('PrivateRoute'));
const PublickRouter = lazy(() => import('PublicRoute'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser
  );
  return (
    <div>
      {!isFetchingCurrentUser && (
        <Suspense>
          <Routes>
            <Route exact path="/" element={<AppBar />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={<PublickRouter redirectTo="/contacts" restricted />}
              >
                <Route path="/register" element={<RegistrationPage />} />
              </Route>
              <Route
                path="/login"
                element={<PublickRouter redirectTo="/contacts" restricted />}
              >
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route path="/contacts" element={<PriveteRout />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
};
