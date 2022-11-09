import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import s from './Registration.module.css';

export const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChanhe = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <section className={s.sectionRegister}>
      <div className={s.containerRegister}>
        <form onSubmit={handleSubmit} className={s.registerForm}>
          <label className={s.labelRegistaer}>
            Имя
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Alex"
              required
              id="name"
              value={name}
              onChange={handleChanhe}
              className={s.inputRegister}
            />
          </label>
          <label className={s.labelRegistaer}>
            Почта
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="exampel@gmail.com"
              required
              id="email"
              value={email}
              onChange={handleChanhe}
              className={s.inputRegister}
            />
          </label>
          <label className={s.labelRegistaer}>
            Пароль
            <input
              type="password"
              name="password"
              minLength="8"
              placeholder="8 characters minimum"
              required
              id="password"
              value={password}
              onChange={handleChanhe}
              className={s.inputRegister}
            />
          </label>
          <button type="submit" className={s.registerButton}>
            Зарагестрироваться
          </button>
        </form>
      </div>
    </section>
  );
};
