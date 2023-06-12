import Link from "next/link";
import ButtonComponent from "packages/RButton/button.component";
import InputComponent from "packages/RInput/input.component";
import React from "react";
import LogoComponent from "src/core/shared/logo/logo.component";
import css from "./login.module.scss";
import { Col, Form, Input, DatePicker, Space, Select, InputNumber } from "antd";
import "reflect-metadata"
import { useDispatch } from "react-redux";
import { login } from "src/core/layouts/public/store/actions";
const LoginComponent = () => {
    const dispatch:any = useDispatch()

  const onFinish = (values:any) => {
     dispatch(login(values))
  };
  return (
    <div className={css.login_section}>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className={css.login_section_content}>
              <div className={css.login_section_content_title}>
                <h2>Hi!</h2>
              </div>
              <div className={css.login_section_content_title}>
                <h1>Log in now for the best experience!</h1>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className={css.login_section_form}>
              <div className={css.login_section_form_title}>
                <h4>Log in </h4>
              </div>
              <Form layout="vertical" onFinish={onFinish} autoComplete="off">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email" },
                  ]}
                >
                  <Input placeholder="enter email" name="email" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password" },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="enter password"
                    name="password"
                  />
                </Form.Item>

                <div className="col-12  p-0 mt-15">
                  <ButtonComponent
                    className={css.login_section_form_btn}
                    size={"xl"}
                    type="submit"
                  >
                    Submit
                  </ButtonComponent>
                </div>
              </Form>
              <div className="col-12 p-0 mt-7 d-flex justify-between">
                <span>Don't have account?</span>
                <Link href="/register">Register</Link>
              </div>
              <div className="col-12 p-0 mt-7 d-flex justify-between">
                <span>Forgot password?</span>
                <Link href="/user/password-forgot">reset password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
