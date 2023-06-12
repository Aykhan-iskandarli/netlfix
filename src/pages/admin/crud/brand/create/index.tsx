import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from "./create.module.scss"
import { Col, Form, Row, Input, Upload, Button, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import { UploadOutlined } from '@ant-design/icons';
import { createBrand } from 'store/brands/store/action';

const BrandCreateComponent = () => {
  const [file, setFile] = useState<any>(null);
  const [fileList, setFileList] = useState<any>([]);
  const dispatch: any = useDispatch()

  const handleChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const handleRemove = (e: any) => {

  }

  const onFinsih = (values: any) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('photo', file);

    dispatch(createBrand(formData))
  }

  return (
    <div className={css.brand_create}>
      <div className="container">
        <h1>Brand Create</h1>
        <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
          <Col >
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name' }]}>
              <Input placeholder="enter name" name="name" />
            </Form.Item>
          </Col>
          <Col >
            <Form.Item name="photo" label="File upload" rules={[{ required: true, message: 'Please upload your file' }]}>
            <Input name="photo" type='file'  accept="image/*" onChange={handleChange}/>
            </Form.Item>
          </Col>
          <div className={css.brand_create_btn}>
            <ButtonComponent type='submit'>Submit</ButtonComponent>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default BrandCreateComponent