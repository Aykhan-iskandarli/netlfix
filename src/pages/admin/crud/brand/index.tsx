import { Image, Space, Table } from 'antd';
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBrand, getBrand } from 'store/brands/store/action'
import css from "./brand.module.scss"
import Router from "next/router";
import ModalComponent from 'packages/RModal/modal.component';
const BrandComponent = () => {
  const brand: any = useSelector((state: any) => state.brand.brand);
  const dispatch:any = useDispatch()
  const [show,setShow] = useState<boolean>(false)
  const [id,setId] = useState<number>()
  useEffect(()=>{
    dispatch(getBrand())
  },[])

  const dataSource: any = brand
  const rowKey = (record: any) => record.id;
  const columns: any = [
    {
        title: "id",
        dataIndex: "id",
        key: "1",
        responsive: ['md'],
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "2",
        
    },
    {
        title: 'Photo',
        key: 'image',
        render: (text:any, record:any) => (
          <Image
                width={50}
                src={text.photo} alt={''}          />
        ),
      },
    {
        title: "Edit",
        dataIndex: "edit",
        key: "edit",
        render: (_: any, record: any) => (
            <Space size="middle">
                <a onClick={() => handleEdit(record.id)}>Edit</a>
            </Space>
        ),
    },
    {
        title: "Delete",
        dataIndex: "delete",
        key: "delete",
        render: (_: any, record: any) => (
            <Space size="middle">
                <a onClick={() => (handleModal(record.id))}>delete</a>
            </Space>
        ),
    },
];
const changeAddModalVisibility = (val:any)=>{
    setShow(val)
}
const handleModal = (id:any) =>{
    setShow(true)
    setId(id)
}

const handleEdit = (id:any) =>{
    Router.push(`/admin/crud/brand/edit/${id}`)
}

const handleDelete = async() =>{
   await dispatch(deleteBrand(id))
   dispatch(getBrand())
   setShow(false)
}

  return (
<div className={css.brand}>
            <div className="container-fluid">
            <CardComponent className={css.brand_card}>
                <div className='row justify-between m-0 p-10'>
                    <h1 className='m-0'>Brand</h1>
                    <ButtonComponent className="home_btn" click={()=>Router.push("/admin/crud/brand/create")}>+ Create</ButtonComponent>
                </div>
            </CardComponent>
            <Table rowKey={rowKey} dataSource={dataSource} columns={columns}  pagination={false} />
            <ModalComponent
                  size={'1'}
                  show={show}
                  position='modal_wrapper'
                  setShow={changeAddModalVisibility} 
                  title={''} 
                  hideHeader={true}         
                   >
                <div className='modal_content'>
                    <h1>
                        are you sure ?
                    </h1>
                </div>
                <div className='modal_btns'>
                    <ButtonComponent color={'--outline-primary'} click={()=>handleDelete()}>Yes</ButtonComponent>
                    <ButtonComponent click={() => {
                        setShow(false)
                    }}>No</ButtonComponent>
                </div>
            </ModalComponent>
            </div>
        </div>
  )
}

export default BrandComponent