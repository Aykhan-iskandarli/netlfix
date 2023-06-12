import React, { useState } from 'react'
import {Form, Input, } from "antd";
import css from "./password-reset.module.scss"
import ButtonComponent from 'packages/RButton/button.component';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { forgotPassword, resetPassword } from 'src/core/layouts/public/store/actions';
import { useRouter } from 'next/router';

const PasswordResetComponent = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {asPath} = useRouter()
const dispatch:any = useDispatch()
const resetToken:any = asPath.split("/")[3]

const validateConfirmPassword = (_:any, value:any) => {
  if (value && value !== password) {
    return Promise.reject(new Error('Passwords is not match  '));
  }
  return Promise.resolve();
};

  const onFinish = (value:any)=>{
    if(resetToken !== "[password-reset]"){
      dispatch(resetPassword(value,resetToken))
    }
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
              <h1>Reset password</h1>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className={css.login_section_form}>
            <div className={css.login_section_form_title}>
              <h4>Reset password </h4>
            </div>
            <Form layout="vertical" onFinish={onFinish} autoComplete="off">
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <Input type="password" placeholder="enter password" name="password" onChange={(e) => setPassword(e.target.value)}  />
              </Form.Item>
              <Form.Item
                label="Confirm password"
                name="cpassword"
                rules={[
                  { required: true, message: "Please input your confirm password" },
                  { validator: validateConfirmPassword }]}
              >
                <Input type="password" placeholder="enter confirm password" name="cpassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
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

export default PasswordResetComponent