import { Outlet, Link } from 'react-router-dom';

import { UserMenu } from '../UserMenu/UserMenu';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <UserMenu />
      <Outlet />
    </div>
  );
};

export { Layout };
