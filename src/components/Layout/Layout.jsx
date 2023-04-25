import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

import css from './Layout.module.css';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav>
        <div>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </div>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export { Layout };
