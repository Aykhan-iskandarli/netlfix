import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from "../create/create.module.scss"
import { Col, Form, Input, Select, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import { createAccount, editAccount, getAccountById } from 'store/accounts/store/action';
import { useRouter } from 'next/router';


const AccountEditComponent = () => {
    const account: any = useSelector((state: any) => state.accounts.accountGetById);
    const {asPath} = useRouter()
    const id = asPath.split("/")[5]
    const [formValue,setFormValue] = useState({
        email:'',
        password:'',
        status:''
    })
    const {email,password,status} = formValue

    useEffect(()=>{
        if(id && id !== "[edit]"){
            dispatch(getAccountById(id))
        }

    },[id])
    useEffect(()=>{
        if(account && id){
            setFormValue({
                ...formValue,
                email:account?.email,
                password:account?.password,
                status:account?.status
            })
        }
    },[account,id])

  const dispatch: any = useDispatch()

  const handleChange = (e: any,name:string) => {
    if(name ==="status"){
        setFormValue({
            ...formValue,
            [name]:e
        })
    }
    else{
        setFormValue({
            ...formValue,
            [name]:e.target.value
        })
    }
  }


  const onFinsih = (values: any) => {
    let param ={
        email,
        password,
        status:status === "Active" ? true: status === "Deactive" ? false:status
    }
    dispatch(editAccount(param,id))
  }

  return (
    <div className={css.account_create}>
      <div className="container">
        <CardComponent className={css.account_create_card}>
          <h1>Account Edit</h1>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col >
              <Form.Item  label="Email" rules={[{ required: true, message: 'Please input your email' }]}>
                <Input placeholder="enter email" name="email" value={email}    onChange={(values: any) => handleChange(values, "email")}/>
              </Form.Item>
            </Col>
            <Col >
              <Form.Item  label="Password" rules={[{ required: true, message: 'Please input your password' }]}>
                <Input placeholder="enter password" name="password" value={password}    onChange={(values: any) => handleChange(values, "password")}/>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Account status" >
                <Select
                  placeholder="Select an option"
                  allowClear
                  value={status}
                   onChange={(values: any) => handleChange(values, "status")}
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

export default AccountEditComponent