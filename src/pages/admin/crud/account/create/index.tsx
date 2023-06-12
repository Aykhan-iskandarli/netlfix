import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from "./create.module.scss"
import { Col, Form, Input, Select, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import { createAccount } from 'store/accounts/store/action';
import  Router  from 'next/router';


const AccountCreateComponent = () => {

  const dispatch: any = useDispatch()

  const handleChange = (e: any) => {
  }

  const handleRemove = (e: any) => {

  }

  const onFinsih = (values: any) => {
    dispatch(createAccount(values))
    Router.push("/admin/crud/account-price-list")
  }

  return (
    <div className={css.account_create}>
      <div className="container">
        <CardComponent className={css.account_create_card}>
          <h1>Account Create</h1>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col >
              <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email' }]}>
                <Input placeholder="enter email" name="email" />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password' }]}>
                <Input placeholder="enter password" name="password" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Account status" name="status">
                <Select
                  placeholder="Select an option"
                  allowClear
                  // value={projectStatusId}
                  // onChange={(values: any) => handleSelect(values, "projectStatusId")}
                  size={'large'}
                >
                  <Select.Option value={true}>Active</Select.Option>
                  <Select.Option value={false}>Deactive</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <div className={css.account_create_btn}>
              <ButtonComponent type='submit'>Submit</ButtonComponent>
            </div>
          </Form>
        </CardComponent>
      </div>
    </div>
  )
}

export default AccountCreateComponent