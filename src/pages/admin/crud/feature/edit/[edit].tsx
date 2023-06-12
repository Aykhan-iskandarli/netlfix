import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Input, Upload, Button, } from 'antd'
import css from "./edit.module.scss"
import CardComponent from 'packages/RCard/card.component'
import { useDispatch, useSelector } from 'react-redux'
import ButtonComponent from 'packages/RButton/button.component'
import { useRouter } from 'next/router'
import { editFeature, getFeatureById } from 'store/feature/store/action'
const EditFeature = () => {
    const featureGetBy: any = useSelector((state: any) => state.brand && state.feature.featureGetById);
    const {asPath} = useRouter()
    const [formValue,setFormValue] = useState({
        description_az:'',
        description_ru:'',
        description_en:''
    })
    const pathName = asPath.split("/")[5]
    const dispatch: any = useDispatch();
    const {description_az,description_en,description_ru} =formValue
    useEffect(()=>{
        if(featureGetBy && pathName){
            setFormValue({
                ...formValue,
                description_az:featureGetBy?.description,
                description_en:featureGetBy?.translations?.description_en,
                description_ru:featureGetBy?.translations?.description_ru
            })
        }
    },[featureGetBy])   
    const handleChange = (e:any) =>{
        const {name,value}= e.target
        setFormValue({
            ...formValue,
            [name]:value
        })
    }
    useEffect(()=>{
        if(pathName !== "[edit]"){
          dispatch(getFeatureById(pathName))
        }
      },[pathName])


    const onFinsih = (values: any) => {
        let param = {
            description: description_az,
            translations: {
                description_en: description_en,
                description_ru: description_ru
            }
        }
        dispatch(editFeature(param,pathName))
    };
    
  return (
    <div className={css.feature_edit}>
    <div className="container">
      <h1>Feature edit</h1>
    <CardComponent className={css.feature_edit_card}>
    <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
        <Col >
        <b>AZ</b>
          <Form.Item label="Description (AZ)" rules={[{ required: true, message: 'Please input your description az' }]}>
            <Input placeholder="enter description az" name="description_az" value={description_az}  onChange={handleChange}/>
          </Form.Item>
        </Col>
        <hr />
        <Col className='mt-20'>
        <b>EN</b>
        <Form.Item  label="Description (EN)" rules={[{ required: true, message: 'Please input your description en' }]}>
            <Input placeholder="enter description en" name="description_en" value={description_en}  onChange={handleChange}/>
          </Form.Item>
        </Col>
        <hr />
        <Col className='mt-20'>
        <b>RU</b>
        <Form.Item  label="Description (Ru)" rules={[{ required: true, message: 'Please input your description ru' }]}>
            <Input placeholder="enter description ru " name="description_ru" value={description_ru}  onChange={handleChange}/>
          </Form.Item>
        </Col>
        <div className={css.feature_edit_btn}>
          <ButtonComponent type='submit'>Submit</ButtonComponent>
        </div>
      </Form>
    </CardComponent>
    </div>
  </div>
  )
}

export default EditFeature