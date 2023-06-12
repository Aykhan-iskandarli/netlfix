import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from "./edit.module.scss"
import { Col, Form,  Input, Select, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';

import CardComponent from 'packages/RCard/card.component';
import {  getFeature, getFeatureAll } from 'store/feature/store/action';
import {  editPriceList, getPriceListById } from 'store/price-list/store/action';
import { getRoom } from 'store/rooms/store/action';
import { getBrand } from 'store/brands/store/action';
import { useRouter } from 'next/router';

const PriceListEditComponent = () => {
  const priceById: any = useSelector((state: any) => state.priceList.priceListGetById);
  const feature: any = useSelector((state: any) => state.feature.feature);
  const room: any = useSelector((state: any) => state.room.room);
  const brand: any = useSelector((state: any) => state.brand.brand);
  const [formValue,setFormValue] = useState<any>({
    roomId:"",
    brandId:"",
    price:"",
    featureId:"",
    time:""
  })
  console.log(priceById,"priceById")
  const {asPath} = useRouter()
  const id = asPath.split("/")[5]
  const {brandId,roomId,featureId,time,price} = formValue
  const dispatch: any = useDispatch()
  const { Option } = Select;
  const handleChange = (e: any,name:string) => {
    if(name === "price"){
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
  }
  useEffect(()=>{
    if(id && priceById){
      setFormValue({
        ...formValue,
        roomId: priceById?.room?._id,
        brandId: priceById?.brand?._id,
        price: priceById?.price,
        featureId: priceById?.features?.map((item:any)=>item._id),
        time: priceById?.time,
      })
    }
  },[id,priceById])
console.log(formValue)
  useEffect(()=>{
    if(id && id !== "[edit]"){
      dispatch(getPriceListById(id))
    }
  },[id])

useEffect(()=>{
  dispatch(getFeatureAll())
  dispatch(getRoom())
  dispatch(getBrand())
},[])

  const onFinsih = (values: any) => {
      let param ={
        brand:brandId,
        time,
        room:roomId,
        price:+price,
        features:featureId
      }

     dispatch(editPriceList(param,id))
  }

  return (
    <div className={css.price_list_edit}>
      <div className="container">
        <h1>Price list edit</h1>
        <CardComponent className={css.price_list_edit_card}>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col>
              <Form.Item
                label="Price"
                rules={[{ required: true, message: "Please input your price" }]}
              >
                <Input type="number" placeholder="enter price" name="price"  value={price} onChange={(e:any)=>handleChange(e,"price")}/>
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                label="Time"
                rules={[{ required: true, message: "Please input your time" }]}
              >
                <Select virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"time")} value={time}>
                  <Option value={30}>30</Option>
                  <Option value={60}>60</Option>
                  <Option value={90}>90</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="mt-20">
              <Form.Item
                 label="Brand name"
                rules={[
                  { required: true, message: "Please input your brand name" },
                ]}
              >
               <Select virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"brandId")} value={brandId}>
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
                label="Room count"
                rules={[
                  { required: true, message: "Please input your room count" },
                ]}
              >
                  <Select virtual placeholder="Secin" onChange={(e:any)=>handleChange(e,"roomId")} value={roomId}>
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
                <Select virtual placeholder="Secin" mode="multiple" onChange={(e:any)=>handleChange(e,"featureId")} value={featureId}>
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

export default PriceListEditComponent