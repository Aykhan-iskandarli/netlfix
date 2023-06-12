import { Image, Space, Table } from 'antd';
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBrand, getBrand } from 'store/brands/store/action'
import css from "./feature.module.scss"
import Router from "next/router";
import ModalComponent from 'packages/RModal/modal.component';
import { deleteFeature, getFeatureAll } from 'store/feature/store/action';
const FeatureComponent = () => {
  const feature: any = useSelector((state: any) => state.feature.feature);
  const dispatch:any = useDispatch()
  const [show,setShow] = useState<boolean>(false)
  const [id,setId] = useState<number>()
  useEffect(()=>{
    dispatch(getFeatureAll())
  },[])
  const dataSource: any = feature
  const rowKey = (record: any) => record.id;
  const columns: any = [
    {
        title: "id",
        dataIndex: "id",
        key: "1",
        responsive: ['md'],
    },
    {
        title: "Description (AZ)",
        dataIndex: "description",
        key: "2",
        
    },
    {
        title: "Description (EN)",
        dataIndex: "translations",
        key: "3",
        render: (text:any) => <span>{text?.en}</span>
    },
      {
        title: "Description (RU)",
        dataIndex: "translations",
        key: "4",
        render: (text:any) => <span>{text?.ru}</span>
        
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
    Router.push(`/admin/crud/feature/edit/${id}`)
}

const handleDelete = async() =>{
   await dispatch(deleteFeature(id))
   dispatch(getFeatureAll())
   setShow(false)
}

  return (
<div className={css.feature}>
            <div className="container-fluid">
            <CardComponent className={css.feature_card}>
                <div className='row justify-between m-0 p-10'>
                    <h1 className='m-0'>Feature</h1>
                    <ButtonComponent className="home_btn" click={()=>Router.push("/admin/crud/feature/create")}>+ Create</ButtonComponent>
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

export default FeatureComponent