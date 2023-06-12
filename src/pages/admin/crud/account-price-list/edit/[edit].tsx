import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./edit.module.scss";
import { Col, DatePicker, Form, Input, Select } from "antd";
import ButtonComponent from "packages/RButton/button.component";
import CardComponent from "packages/RCard/card.component";
import {  getAccount } from "store/accounts/store/action";
import { createAccountPriceList, editAccountPriceList, getAccountPriceListById } from "store/account-price-list/store/action";
import moment from "moment";
import { getPriceList} from "store/price-list/store/action";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import BannerComponent from "src/core/shared/banner/banner.component";

const AccountPriceListCEditComponent = () => {
  const [selectedDate, setSelectedDate] = useState<any>();
  const accountState: any = useSelector((state: any) => state.accounts.account);
  const price_list: any = useSelector(
    (state: any) => state.priceList.priceList
  );
    const accountPriceGetById: any = useSelector(
    (state: any) => state.accountPriceList.accountPriceListGetById
  );
  const {asPath} = useRouter()
  const id = asPath.split("/")[5]
  const dispatch: any = useDispatch();
  const [formValue, setFormValue] = useState<any>({
    roomStatus: "",
    account: "",
    price: "",
    roomCount: "",
    expiredate: "",
    roomName: "",
    roomPassword: "",
  });
  const {
    roomStatus,
    account,
    price,
    roomCount,
    expiredate,
    roomName,
    roomPassword,
  } = formValue;
  useEffect(() => {
    dispatch(getAccount());
    dispatch(getPriceList());
  }, []);

  
  const dateFormat = 'YYYY/M/DD';


  useEffect(() => {
    if(id && id !== "[edit]"){
    dispatch(getAccountPriceListById(id));
    }
  }, [id]);

  useEffect(()=>{
if(id && accountPriceGetById){
    setFormValue({
        ...formValue,
        roomStatus:accountPriceGetById?.roomStatus,
        account:accountPriceGetById?.account?._id,
        price:accountPriceGetById?.priceListId?.map((item:any)=>item._id),
        expiredate:accountPriceGetById?.expiredate?.split("T").reverse()[1],
        roomCount:accountPriceGetById?.roomCount,
        roomName:accountPriceGetById?.roomName,
        roomPassword:accountPriceGetById?.roomPassword, 
    })
}
  },[id,accountPriceGetById])
  const handleChange = (e: any,name:string) => {
    if(name === "roomCount" || name === "roomName" || name === "roomPassword"){
      setFormValue({
        ...formValue,
         [name]:e.target.value
      })
    }
    else{
      setFormValue({
        ...formValue,
         [name]:e
      })
    }
  };


  const onFinsih = (values: any) => {
    if(id){
      let param = {
        accountId: formValue?.account,
        priceListId: formValue.price,
        roomCount: formValue.roomCount,
        expiredate,
        roomName: formValue.roomName,
        roomPassword: formValue.roomPassword,
        roomStatus: formValue.roomStatus,
      };
        dispatch(editAccountPriceList(param,id));
    }
  
  };

  const changeDate:any = (date: any, dateString: any) => {
    setFormValue({
      ...formValue,
      expiredate:dateString
    })
  };
  const disabledDate: RangePickerProps['disabledDate'] = (current:any) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };
  return (
    <>
    <BannerComponent prev={"Back"}/>
    <div className={css.account_edit}>
      <div className="container">
        <CardComponent className={css.account_edit_card}>
          <h1>Account edit</h1>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col>
              <Form.Item label="Room status">
                <Select
                  placeholder="Select an option"
                  allowClear
                  value={roomStatus}
                  onChange={(e:any)=>handleChange(e,"roomStatus")}
                  size={"large"}
                >
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="passive">Passive</Select.Option>
                  <Select.Option value="in usage">In usage</Select.Option>
                  <Select.Option value="overdue">Overdue</Select.Option>
                  <Select.Option value="neutral">Neutral</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Account">
                <Select
                  placeholder="Select an option"
                  allowClear
                  value={account}
                  onChange={(e:any)=>handleChange(e,"account")}
                  size={"large"}
                >
                  {accountState &&
                    accountState?.map((item: any, index: number) => (
                      <Select.Option key={index} value={item.id}>
                        {item.email}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Price">
                <Select
                  placeholder="Select an option"
                  allowClear
                  value={price}
                  onChange={(e:any)=>handleChange(e,"price")}
                  size={"large"}
                  mode="multiple"
                >
                  {
                    price_list &&
                    price_list?.map((item:any)=>(
                      item?.pricelist?.map((price:any,index:number)=>(
                        <Select.Option key={price.id} value={price.id}>{price.value.toFixed(2)} $ - {item.brand}</Select.Option>
                      ))
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col >
              <Form.Item  label="Room  count" rules={[{ required: true, message: 'Please input your room count' }]}>
                <Input placeholder="enter room came" name="roomCame" value={roomCount}  onChange={(e:any)=>handleChange(e,"roomCount")}/>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Expire date"
                rules={[
                  {
                    required: true,
                    message: "Please input your  birthday",
                  },
                ]}
              >
                <DatePicker
                  value={dayjs(expiredate, dateFormat)}
                  disabledDate={disabledDate}
                  name="expiredate"
                  style={{ width: "100%" }}
                  onChange={changeDate}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Room user name"
                rules={[
                  {
                    required: true,
                    message: "Please input your room user name",
                  },
                ]}
              >
                <Input
                  value={roomName}
                  placeholder="enter room user name"
                  name="roomName"
                  onChange={(e:any)=>handleChange(e,"roomName")}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Room user password"
                rules={[
                  {
                    required: true,
                    message: "Please input your room user password",
                  },
                ]}
              >
                <Input
                  placeholder="enter room user password"
                  name="roomPassword"
                  value={roomPassword}
                  onChange={(e:any)=>handleChange(e,"roomPassword")}
                />
              </Form.Item>
            </Col>
            <div className={css.account_edit_btn}>
              <ButtonComponent type="submit">Submit</ButtonComponent>
            </div>
          </Form>
        </CardComponent>
      </div>
    </div>
    </>
  );
};

export default AccountPriceListCEditComponent;
