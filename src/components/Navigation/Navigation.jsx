import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <nav className={s.navigationContainer}>
      <div>
        <NavLink to="/" className={s.navigation}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={s.navigation}>
            Contacts
          </NavLink>
        )}
      </div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <NavLink to="/register" className={s.navigation}>
            Registration
          </NavLink>
          <NavLink to="/login" className={s.navigation}>
            Log in
          </NavLink>
        </div>
      )}
    </nav>
  );
};
