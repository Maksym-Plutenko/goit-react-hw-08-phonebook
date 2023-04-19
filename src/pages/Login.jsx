import { useDispatch, useSelector } from 'react-redux';

import { logIn } from 'redux/authorization/operations';

import css from './index.module.css';

import { useNavigate,  Navigate} from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authorization/selectors';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // if (isLoggedIn) {
  //   navigate('/contacts', { replace: true });
  // }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <Navigate to='/contacts'/>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export { Login };
