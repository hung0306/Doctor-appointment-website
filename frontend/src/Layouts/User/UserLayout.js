import { Layout } from "antd";
import { Outlet, Link } from "react-router-dom";
import "./UserLayout.scss";
import Logout from "../../Pages/User/Logout";
import { useSelector } from "react-redux";
const { Footer, Content } = Layout;
function UserLayout() {
  const isLoggedIn = useSelector((state) => state.loginReducer);

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header__left">Logo</div>
          <div className="header__center">
            <ul className="header__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/find-doctor">Find Doctor</Link>
              </li>
              <li>
                <Link to="/specialties">Specialties</Link>
              </li>
            </ul>
          </div>
          <div className="header__right">
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="btn btn--signup" role="button">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn--login" role="button">
                  Log In
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/ProfileUser"
                  className="btn btn--profile"
                  role="button"
                >
                  Profile
                </Link>
                <Logout />
              </>
            )}
          </div>
        </div>
      </div>

      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
}

export default UserLayout;
