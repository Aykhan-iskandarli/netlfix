import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from "./create.module.scss"
import { Col, DatePicker, Form, Input, Select, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import { getAccount } from 'store/accounts/store/action';
import { createAccountPriceList } from 'store/account-price-list/store/action';
import moment from 'moment';
import { getPriceList } from 'store/price-list/store/action';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import BannerComponent from 'src/core/shared/banner/banner.component';


const AccountPriceListCreateComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const account: any = useSelector((state: any) => state.accounts.account);
  const price_list: any = useSelector((state: any) => state.priceList.priceList);
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(getAccount())
    dispatch(getPriceList())
  }, [])

  const handleRemove = (e: any) => {

  }

  const disabledDate: RangePickerProps['disabledDate'] = (current:any) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  const onFinsih = (values: any) => {

    let param = {
      accountId:values?.account,
      priceListId:values.price,
      roomCount:+values.roomCount,
      expiredate:values.expireDate,
      roomName:values.roomName,
      roomPassword:values.roomPassword,
      roomStatus:values.roomStatus,
    }
      dispatch(createAccountPriceList(param))
  }

  const changeDate = (date: any, dateString: any) => {
    const formattedDate: any = moment(dateString).format('YYYY-MM-DDTHH:mm:ss.sssZ');

    setSelectedDate(formattedDate);
  }
  return (
    <>
     <BannerComponent prev="Back"/>
    <div className={css.account_create}>
      <div className="container">
        <CardComponent className={css.account_create_card}>
          <h1>Account Create</h1>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col>
              <Form.Item label="Room status" name="roomStatus">
                <Select
                  placeholder="Select an option"
                  allowClear
                  // value={projectStatusId}
                  // onChange={(values: any) => handleSelect(values, "projectStatusId")}
                  size={'large'}
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
              <Form.Item label="Account" name="account">
                <Select
                  placeholder="Select an option"
                  allowClear
                  // value={account}
                  // onChange={(values: any) => handleSelect(values, "account")}
                  size={'large'}
                >
                  {
                    account && account?.map((item:any,index:number)=>(
                      <Select.Option key={index} value={item.id}>{item.email}</Select.Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Price" name="price">
                <Select
                  placeholder="Select an option"
                  allowClear
                  // value={price}
                  // onChange={(values: any) => handleSelect(values, "price")}
                  size={'large'}
                  mode="multiple"
                >
                  {
                    price_list &&
                    price_list?.map((item:any)=>(
                      item?.pricelist?.map((price:any,index:number)=>(
                        <Select.Option  key={price.id} value={price.id}>{price.value.toFixed(2)} $ - {item.brand}</Select.Option>
                      ))
                    ))
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Expire date"
                name="expireDate"
                rules={[
                  {
                    required: true,
                    message: "Please input your  birthday",
                  },
                ]}
              >
                <DatePicker disabledDate={disabledDate} name="expireDate" style={{ width: "100%" }} onChange={changeDate} />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item name="roomName" label="Room user name" rules={[{ required: true, message: 'Please input your room user name' }]}>
                <Input placeholder="enter room user name" name="roomName" />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item name="roomCount" label="Room  count" rules={[{ required: true, message: 'Please input your room count' }]}>
                <Input placeholder="enter room came" name="roomCame" />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item name="roomPassword" label="Room user password" rules={[{ required: true, message: 'Please input your room user password' }]}>
                <Input placeholder="enter room user password" name="roomPassword" />
              </Form.Item>
            </Col>


            <div className={css.account_create_btn}>
              <ButtonComponent type='submit'>Submit</ButtonComponent>
            </div>
          </Form>
        </CardComponent>
      </div>
    </div>
    </>
  )
}

export default AccountPriceListCreateComponent