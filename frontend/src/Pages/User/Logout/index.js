import { useNavigate } from "react-router-dom";

import { deleteAllCookies } from "../../../Helpers/cookies";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../../actions/login";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    deleteAllCookies("token");
    dispatch(checkLogin(false));
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="btn btn--logout-action">
      Logout
    </button>
  );
}

export default Logout;
