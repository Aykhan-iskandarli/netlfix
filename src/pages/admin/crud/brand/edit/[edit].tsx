import React,{useEffect,useState} from 'react'
import { Col, Form, Row, Input, Upload, Button, } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import { UploadOutlined } from '@ant-design/icons';
import css from "./edit.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { editBrand, getBrandById } from 'store/brands/store/action';
import InputComponent from 'packages/RInput/input.component';

const EditBrand = () => {
  const brandById: any = useSelector((state: any) => state.brand && state.brand.brandGetById);
  const [file, setFile] = useState<any>([]);
  const [name, setName] = useState<any>("");
  const dispatch: any = useDispatch()
  const {asPath} = useRouter()
const pathName = asPath.split("/")[5]


useEffect(()=>{
  if(brandById && pathName){
    setName({
      name:brandById?.name
    })
    setFile({
      photo:brandById && brandById?.photo
    })
  }


},[brandById])
  useEffect(()=>{
    if(pathName !== "[edit]"){
      dispatch(getBrandById(pathName))
    }
  },[pathName])

  
  const handleChange = (info: any, name: any) => {
    if (name === "name") {
      setName({
        name:info.target.value
      })
    }
    else {
      setFile(info.target.files[0])
    }

  }
  const onFinish = (value: any) => {
    const formData = new FormData();
    formData.append('name',  name.name);
    formData.append('photo',  file);

    dispatch(editBrand(formData,pathName))
  }
  return (
    <div className={css.brand_edit}>
      <div className="container">
        <h1>Brand Edit</h1>
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          <Col >
            <Form.Item  label="Name" rules={[{ required: true, message: 'Please input your name' }]}>
              <Input placeholder="enter name" name="name" value={name.name} onChange={(e:any,)=>handleChange(e,"name")}/>
            </Form.Item>
          </Col>
          <Col >
          <Form.Item initialValue={brandById &&  file?.photo} label="File upload" rules={[{ required: true, message: 'Please upload your file' }]}>
            <Input name="file" type='file'  onChange={(e:any,)=>handleChange(e,"upload")}/>
            </Form.Item>
          </Col>
          <div className={css.brand_edit_btn}>
            <ButtonComponent type='submit'>Submit</ButtonComponent>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EditBrand