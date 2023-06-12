import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import css from "./edit.module.scss"
import { Col, Form, Input } from 'antd'
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import { editPromocode, getPromocodeById } from 'store/promocode/store/action';
import { useRouter } from 'next/router';


const EditPromocodeComponent = () => {
  const { asPath } = useRouter()
  const promocodeGetById: any = useSelector((state: any) => state.promocode.promocodeGetById);
  const [formValue, setFormValue] = useState({
    promocode: "",

  })
  const id = asPath.split("/")[5]

  const handleChange = (e:any)=>{
    const {name,value} =e.target
    setFormValue({...formValue,[name]:value})
  }

  useEffect(() => {
    if(id && id !== "[edit]"){
    dispatch(getPromocodeById(id))
    }
  }, [id])

  useEffect(() => {
    setFormValue({
      ...formValue,
      promocode: promocodeGetById?.promocode
    })
  }, [id,promocodeGetById])

  const { promocode } = formValue
  const dispatch: any = useDispatch()

  const onFinsih = (values: any) => {

    dispatch(editPromocode({promocode},id))
  }

  return (
    <div className={css.promocode_edit}>
      <div className="container">
        <h1>Promocode edit</h1>
        <CardComponent className={css.promocode_edit_card}>
          <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
            <Col>
              <Form.Item
                label="Promocode"
                rules={[{ required: true, message: "Please input your promocode" }]}
              >
                <Input type="text"
                  value={promocode}
                  placeholder="enter promocode"  name="promocode" onChange={handleChange} />
              </Form.Item>
            </Col>
            <div className={css.promocode_edit_btn}>
              <ButtonComponent type="submit">Submit</ButtonComponent>
            </div>
          </Form>
        </CardComponent>
      </div>
    </div>
  );
}

export default EditPromocodeComponent