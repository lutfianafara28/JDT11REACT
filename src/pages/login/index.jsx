import { Button, Form, Input, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken, login } from "../../redux/reducers/tokenSlice";
const { Title } = Typography;


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.token.login)
  const [form] = Form.useForm();

  const onFinish = async (Values) => {
    dispatch(login(Values))
  };
  useEffect(() => {
    if (getToken() !== null) {
      form.resetFields();
      navigate("/", { replace: true })
    }
  }, [token]) //eslint-disable-line

  const onFinishFailed = (errorInfo) => {
    console.log("Failed: ", errorInfo);
  };
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-300 mx-24 opacity-90 rounded-lg">
      <div className="layout-auth-form-wrapper">
        <Title className="layout-auth-title" level={3}>
          Masuk
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Silakan masukkan email Anda",
              },
              { type: "email", message: "Email tidak valid" },
            ]}
          >
            <Input placeholder="Contoh: johndee@gmail.com" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Silakan masukkan password Anda",
              },
            ]}
          >
            <Input.Password placeholder="Masukkan password" />
          </Form.Item>
          <br />
          <Form.Item>
            <Button
              // loading={loading}
              // disabled={loading}
              htmlType="submit"
              type="primary"
              block
              size="large"
            >
              Masuk
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
