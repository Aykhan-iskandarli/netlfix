import React from 'react'
import {Form, Input, } from "antd";
import css from "./password-forgot.module.scss"
import ButtonComponent from 'packages/RButton/button.component';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { forgotPassword } from 'src/core/layouts/public/store/actions';

const ForgotPassword = () => {
const dispatch:any = useDispatch()
  const onFinish = (value:any)=>{
    dispatch(forgotPassword(value))
  }
  return (
    <div className={css.login_section}>
    <div className="container mt-100">
      <div className="row">
        <div className="col-7">
          <div className={css.login_section_content}>
            <div className={css.login_section_content_title}>
              <h2>Hi!</h2>
            </div>
            <div className={css.login_section_content_title}>
              <h1>Forgot password</h1>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className={css.login_section_form}>
            <div className={css.login_section_form_title}>
              <h4>Forgot password </h4>
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

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword