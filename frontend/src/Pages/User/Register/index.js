import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./register.scss";
import { registerUser } from "../../../Service/User/userService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (options) => {
    console.log("Register values:", options);
    const result = await registerUser(options);
    message.success(result.message);
    if (result.code == 200) {
      navigate("/login");
    }
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("The two passwords that you entered do not match!")
      );
    },
  });

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Create an account</h2>
        <Form form={form} name="register" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="fullName"
            label="Full name"
            rules={[{ required: true, message: "Please input your full name" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input a password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              validateConfirmPassword,
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
