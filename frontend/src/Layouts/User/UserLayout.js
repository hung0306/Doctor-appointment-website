import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./UserLayout.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const { Content } = Layout;

function UserLayout() {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}

export default UserLayout;
