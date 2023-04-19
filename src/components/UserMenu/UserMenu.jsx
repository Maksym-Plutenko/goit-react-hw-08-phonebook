import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "redux/authorization/selectors";
import { logOut } from "redux/authorization/operations";

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const clickHandler = e => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={clickHandler}>Logout</button>
    </div>
  );
};

export { UserMenu };
