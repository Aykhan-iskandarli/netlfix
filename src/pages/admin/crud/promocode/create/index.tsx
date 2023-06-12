import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import css from "./create.module.scss"
import { Col, Form,  Input} from 'antd'
import ButtonComponent from 'packages/RButton/button.component';

import CardComponent from 'packages/RCard/card.component';
import { useRouter } from 'next/router';
import { createPromocode } from 'store/promocode/store/action';

const CreatePromocodeComponent = () => {

  const [formValue,setFormValue] = useState({
    promocode:"",
 
  })
  const {promocode} = formValue
  const dispatch: any = useDispatch()

  const onFinsih = (values: any) => {
     dispatch(createPromocode(values))
  }

  return (
    <div className={css.promocode_create}>
      <div className="container">
        <h1>Promocode Create</h1>
        <CardComponent className={css.promocode_create_card}>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col>
              <Form.Item
                name="promocode"
                label="Promocode"
                rules={[{ required: true, message: "Please input your promocode" }]}
              >
                <Input type="text" placeholder="enter promocode" name="promocode"/>
              </Form.Item>
            </Col>
            <div className={css.promocode_create_btn}>
              <ButtonComponent type="submit">Submit</ButtonComponent>
            </div>
          </Form>
        </CardComponent>
      </div>
    </div>
  );
}

export default CreatePromocodeComponent