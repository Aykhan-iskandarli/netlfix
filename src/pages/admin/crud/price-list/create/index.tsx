import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from "./create.module.scss"
import { Col, Form,  Input, Select, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';

import CardComponent from 'packages/RCard/card.component';
import { createFeature, getFeature, getFeatureAll } from 'store/feature/store/action';
import { createPriceList } from 'store/price-list/store/action';
import { getRoom } from 'store/rooms/store/action';
import { getBrand } from 'store/brands/store/action';
import { getPromocode } from 'store/promocode/store/action';

const PriceListComponent = () => {
  const feature: any = useSelector((state: any) => state.feature.feature);
  const promocodes: any = useSelector((state: any) => state.promocode.promocode);
  const room: any = useSelector((state: any) => state.room.room);
  const brand: any = useSelector((state: any) => state.brand.brand);
  const [formValue,setFormValue] = useState({
    roomId:"",
    brandId:"",
    price:"",
    featureId:"",
    time:"",
    promocode:"",
    discount:""
  })
  const {brandId,roomId,featureId,time,promocode} = formValue
  const dispatch: any = useDispatch()
  const { Option } = Select;
  const handleChange = (e: any,name:string) => {
    setFormValue({
      ...formValue,
        [name]:e
    })

  }
  
  const handleRemove = (e: any) => {

  }
useEffect(()=>{
  dispatch(getRoom())
  dispatch(getBrand())
  dispatch(getFeatureAll())
  dispatch(getPromocode())
},[])

  const onFinsih = (values: any) => {
      let param ={
        brand:brandId,
        time,
        room:roomId,
        price:+values.price,
        discount:+values.discount,
        features:featureId,
        promocode
      }
      dispatch(createPriceList(param))
  }

  return (
    <div className={css.price_list_create}>
      <div className="container">
        <h1>Price list Create</h1>
        <CardComponent className={css.price_list_create_card}>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please input your price" }]}
              >
                <Input type="number" placeholder="enter price" name="price" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="discount"
                label="Discount"
                rules={[{ required: true, message: "Please input your discount" }]}
              >
                <Input type="number" placeholder="enter discount" name="discount" />
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                name="time"
                label="Time"
                rules={[{ required: true, message: "Please input your time" }]}
              >
                <Select  virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"time")}>
                  <Option value={30}>30</Option>
                  <Option value={60}>60</Option>
                  <Option value={90}>90</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                name="brand_name"
                label="Brand name"
                rules={[
                  { required: true, message: "Please input your brand name" },
                ]}
              >
               <Select virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"brandId")}>
                  {
                    brand && brand?.map((item:any,index:number)=>(
                      <Option  key={index} value={item?.id}>{item?.name}</Option>
                    ))
                  }
            
                </Select>
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                name="promocode"
                label="Promocode"
              >
               <Select virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"promocode")}>
                  {
                    promocodes && promocodes?.map((item:any,index:number)=>(
                      <Option  key={index} value={item?.id}>{item?.promocode}</Option>
                    ))
                  }
            
                </Select>
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                name="room_count"
                label="Room count"
                rules={[
                  { required: true, message: "Please input your room count" },
                ]}
              >
                  <Select virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"roomId")}>
                  {
                    room && room?.map((item:any,index:number)=>(
                      <Option  key={index} value={item?.id}>{item?.count}</Option>
                    ))
                  }
            
                </Select>
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                label="Feature"
                rules={[
                  { required: true, message: "Please input your feature" },
                ]}
              >
                <Select virtual placeholder="Secin" mode="multiple" onChange={(e:any)=>handleChange(e,"featureId")}>
                  {
                    feature && feature?.map((item:any,index:number)=>(
                      <Option  key={index} value={item?.id}>{item?.description}</Option>
                    ))
                  }
            
                </Select>
              </Form.Item>
            </Col>
            <div className={css.price_list_create_btn}>
              <ButtonComponent type="submit">Submit</ButtonComponent>
            </div>
          </Form>
        </CardComponent>
      </div>
    </div>
  );
}

export default PriceListComponent