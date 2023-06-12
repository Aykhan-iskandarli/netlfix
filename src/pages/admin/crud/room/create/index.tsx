import React, { useEffect } from 'react'
import { Col, Form, Row, Input, Upload, Button, } from 'antd'
import css from "./create.module.scss"
import ButtonComponent from 'packages/RButton/button.component'
import { useDispatch } from 'react-redux'
import { createRoom } from 'store/rooms/store/action'

const RoomCreateComponent = () => {
  const dispatch:any = useDispatch()

  const onFinsih = (value:any) =>{
    dispatch(createRoom({count:+value.roomCount}))
  }

  return (
    <div className={css.room_create}>
      <div className="container">
      <h1>Room Create</h1>
        <Form layout="vertical" onFinish={onFinsih} autoComplete="off">
          <Col >
            <Form.Item name="roomCount" label="Room count" rules={[{ required: true, message: 'Please input your room count' }]}>
              <Input type='number' placeholder="enter room count" name="roomCount" />
            </Form.Item>
          </Col>
          <div className={css.room_create_btn}>
            <ButtonComponent type='submit'>Submit</ButtonComponent>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default RoomCreateComponent