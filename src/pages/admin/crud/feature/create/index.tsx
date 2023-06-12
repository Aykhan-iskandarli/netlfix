import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import css from "./create.module.scss"
import { Col, Form,Input} from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import { createFeature } from 'store/feature/store/action';

const FeatureCreateComponent = () => {

  const dispatch: any = useDispatch()

  const handleChange = (e: any) => {
  }

  const handleRemove = (e: any) => {

  }

  const onFinsih = (values: any) => {

    let param ={
      description:values.az,
      translations:{
        en:values.en,
        ru:values.ru,
      }
    }
    dispatch(createFeature(param))
  }

  return (
    <div className={css.feature_create}>
      <div className="container">
        <h1>Feature Create</h1>
      <CardComponent className={css.feature_create_card}>
      <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
          <Col >
          <b>AZ</b>
            <Form.Item name="az" label="Description" rules={[{ required: true, message: 'Please input your description' }]}>
              <Input placeholder="enter description" name="az" />
            </Form.Item>
          </Col>
          <hr />
          <Col className='mt-20'>
          <b>EN</b>
          <Form.Item name="en" label="Description" rules={[{ required: true, message: 'Please input your description' }]}>
              <Input placeholder="enter description" name="en" />
            </Form.Item>
          </Col>
          <hr />
          <Col className='mt-20'>
          <b>RU</b>
          <Form.Item name="ru" label="Description" rules={[{ required: true, message: 'Please input your description' }]}>
              <Input placeholder="enter description" name="ru" />
            </Form.Item>
          </Col>
          <div className={css.feature_create_btn}>
            <ButtonComponent type='submit'>Submit</ButtonComponent>
          </div>
        </Form>
      </CardComponent>
      </div>
    </div>
  )
}

export default FeatureCreateComponent