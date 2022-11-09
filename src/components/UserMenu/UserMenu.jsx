import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.containerMessage}>
      <span className={s.welcome}>Welcome, {name}!</span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.welcomeButton}
      >
        Log out
      </button>
    </div>
  );
};
