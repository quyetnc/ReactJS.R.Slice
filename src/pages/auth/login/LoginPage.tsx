import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "config/hooks";
import { Container, FormContainer, SubmitItem } from "./LoginPageStyled";
import { authActions } from "features/auth/authSlice";
import { LogoBlack } from "utils/media";
import { ROLE } from "utils/constants/role.constaint";
export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiration: string;
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loginLoading } = useAppSelector((state) => state.auth);

  const onFinish = (values: any) => {
    dispatch(
      authActions.login({
        values: values,
        onSuccess: (role: string) => {
          role == ROLE.USER ? navigate("/profile") : navigate("/users");
        },
      })
    );
    // dispatch(authActions.getGoogleToken());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <div>
        <FormContainer
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <img src={LogoBlack} alt="logo-gst" height={100} width={200} />
          <Form.Item
            label="Username"
            name="username"
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Please enter your username!" }]}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input disabled={loginLoading} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Please enter your password!" }]}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input.Password disabled={loginLoading} />
          </Form.Item>

          {/* <Form.Item className="link" wrapperCol={{ span: 24 }}>
            <Link to={"/forgotPassword"}>Forgot password?</Link>
          </Form.Item> */}

          <Form.Item className="link" wrapperCol={{ span: 24 }}>
            <Link to={"/resetPassword"}>Reset password?</Link>
          </Form.Item>

          <SubmitItem wrapperCol={{ span: 24 }}>
            <Button disabled={loginLoading} type="primary" htmlType="submit">
              Sign In
            </Button>
          </SubmitItem>
        </FormContainer>
      </div>
    </Container>
  );
};

export default LoginPage;
