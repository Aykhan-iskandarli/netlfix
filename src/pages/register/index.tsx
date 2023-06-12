import ButtonComponent from "packages/RButton/button.component";
import React,{useEffect, useState} from "react";
import "reflect-metadata"
import css from "./register.module.scss";
import sing_up from "src/assets/images/auth.svg";
import Image from "next/image";
import Link from "next/link";
import { Col, Form, Input, DatePicker, Space, Select, InputNumber } from "antd";
import InputMask from 'react-input-mask';
import { MaskedInput } from "antd-mask-input";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { register } from "src/core/layouts/public/store/actions";
const RegisterComponent = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch:any = useDispatch()

  // const countryOptions = [
  //   { label: "Turkey", value: "+994" },
  //   { label: "United States", value: "+1" },
  //   { label: "United Kingdom", value: "+44" },
  // ];
  // const [countryCode,setCountryCode] = useState<any>(countryOptions[0].value)
  const [phoneNumber,setPhoneNumber] = useState<any>('')
  // const handleChange = (e:any,name:string) =>{
  //   if(name==="countryCode"){
  //       setCountryCode(e)
  //   }
  //   else{
  //       setPhoneNumber(e.target.value)
  //   }
  // }

const changeDate = (date:any, dateString:any)=>{
  const formattedDate:any = moment(dateString).format('YYYY-MM-DDTHH:mm:ss.sssZ');

  setSelectedDate(formattedDate);
}

  const onFinish = (values: any) => {
    let params = {
        firstName:values.firstName,
        lastName:values.lastName,
        password:values.password === values.confirmPassword ? values.password:"",
        email:values.email,
        birthday:selectedDate,

    }
    dispatch(register(params))
  };
  return (
    <div className={css.register_section}>
      <div className="container">
        <div className={css.register_section_title}>
          <h1>Hi, Login page</h1>
        </div>
        <div className="row py-150">
          <div className="col-7 d-flex">
            <div className={css.register_section_content}>
              <Image src={sing_up} alt="" />
            </div>
          </div>
          <div className="col-5 ">
            <div className={css.register_section_form}>
              <div className={css.register_section_form_title}>
                <h4>Log in </h4>
              </div>
              <Form layout="vertical" onFinish={onFinish} autoComplete="off">
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input your first name" },
                  ]}
                >
                  <Input placeholder="enter first name" name="firstName" />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name" },
                  ]}
                >
                  <Input placeholder="enter last name" name="lastName" />
                </Form.Item>
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
                <Form.Item
                  label="Confirm password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your confirm password",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="enter again password"
                    name="confirmPassword"
                  />
                </Form.Item>
                  <Form.Item
                    label="Birthday"
                    name="birthday"
                    rules={[
                      {
                        required: true,
                        message: "Please input your  birthday",
                      },
                    ]}
                  >
                    <DatePicker name="birthday" style={{ width: "100%" }} onChange={changeDate}/>
                  </Form.Item>

                {/* <Space.Compact   style={{ width: "100%" }}>
                  <Select
                    style={{ width: "30%" }}
                    defaultValue={countryOptions[0].value}
                    onChange={(e,name)=>handleChange(e,"countryCode")}
                  >
                    {countryOptions.map((option: any, index: number) => (
                      <Option
                        key={index}
                        value={option.value}
                        name="countryCode"
                      >
                        {option.value}
                      </Option>
                    ))}
                  </Select>
                  <MaskedInput  mask={'00 000 00 00'}  onChange={(e)=>handleChange(e,"phoneNumber")}/>
                 
                </Space.Compact> */}

                <div className="col-12  p-0 mt-15">
                  <ButtonComponent
                    type="submit"
                    className={css.register_section_form_btn}
                    size={"xl"}
                  >
                    Submit
                  </ButtonComponent>
                </div>
                <div className="col-12 p-0 mt-7 d-flex justify-between">
                  <span>Do you have account?</span>
                  <Link href="/login">Login</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
