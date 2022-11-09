import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from 'components/MainButton/MainButton';
import s from './Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.sectionLogin}>
      <div className={s.containerLogin}>
        <form onSubmit={handleSubmit} className={s.loginForm}>
          <label className={s.labelLogin}>
            Password
            <input
              onChange={hendleChange}
              type="password"
              name="password"
              minLength="8"
              autoComplete="off"
              placeholder="8 characters minimum"
              required
              id="password"
              value={password}
              className={s.inputLogin}
            />
          </label>
          <label className={s.labelLogin}>
            Email
            <input
              onChange={hendleChange}
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="exampel@gmail.com"
              required
              id="email"
              value={email}
              className={s.inputLogin}
            />
          </label>
          <Button type="submit">Enter</Button>
        </form>
      </div>
    </section>
  );
};
