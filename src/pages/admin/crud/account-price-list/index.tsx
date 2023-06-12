import { Space, Table } from 'antd';
import ButtonComponent from 'packages/RButton/button.component';
import CardComponent from 'packages/RCard/card.component';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import css from "./account-price-list.module.scss"
import Router from "next/router";
import ModalComponent from 'packages/RModal/modal.component';
import { deleteAccountPriceList, getAccountPriceList } from 'store/account-price-list/store/action';
import BannerComponent from 'src/core/shared/banner/banner.component';
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions';
const AccountPriceList = () => {
  const accountPriceList: any = useSelector((state: any) => state.accountPriceList.accountPriceList);
  const dispatch: any = useDispatch()
  const [show, setShow] = useState<boolean>(false)
  const [id, setId] = useState<number>()
  useEffect(() => {
    dispatch(getAccountPriceList())
  }, [])

  const dataSource: any = accountPriceList
  const rowKey = (record: any) => record.id;
  const columns: any = [

    {
      title: "Status",
      dataIndex: "account",
      key: "2",
      width:150,
      render: (text: any) => <span>{text?.status === true ? "Active" : "Deactive"}</span>
    },
    {
      title: "Email",
      dataIndex: "account",
      width:200,
      key: "3",
      render: (text: any) => <span>{text?.email}</span>
    },
    {
      title: "Password",
      dataIndex: "account",
      key: "4",
      width:150,
      render: (text: any) => <span>{text?.password}</span>
    },
    {
      title: "Room count",
      dataIndex: "roomCount",
      key: "5",
      width:150,
    },
    {
      title: "Expire date",
      dataIndex: "expiredate",
      key: "6",
      width:200,
      render: (expiredate: any) => <span>{expiredate.split("T")[0]}</span>
    },

    {
      title: "Room status",
      dataIndex: "roomStatus",
      key: "7",
      width:150,
      render: (status: any) => <span className={`${status === 'active' ? "red":""}`}>{status}</span>
    },
    {
      title: "Room name",
      dataIndex: "roomName",
      key: "8",
      width:150,
    },
    {
      title: "Room password",
      dataIndex: "roomPassword",
      key: "9",
      width:150,
    },
    {
      title: "Brand name",
      dataIndex: "priceListId",
      key: "10",
      width:150,
      render: (price: any) => <>
      {
        price && price?.map((item:any)=>(
          <div key={generateGuid()}>
            <span>{item.brand.name} - {item.time} day</span>
          </div>
        ))
      }
      </>
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      width:150,
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
      width:150,
      render: (_: any, record: any) => (
        <Space size="middle">
          <a onClick={() => (handleModal(record.id))}>delete</a>
        </Space>
      ),
    },
  ];
  const changeAddModalVisibility = (val: any) => {
    setShow(val)
  }
  const handleModal = (id: any) => {
    setShow(true)
    setId(id)
  }

  const handleEdit = (id: any) => {
    Router.push(`/admin/crud/account-price-list/edit/${id}`)
  }

  const handleDelete = async () => {
    await dispatch(deleteAccountPriceList(id))
    dispatch(getAccountPriceList())
    setShow(false)
  }

  return (
   <>
   <BannerComponent prev="Back"/>
    <div className={css.account_price_list}>
      <div className="container-fluid">
        <CardComponent className={css.account_price_list_card}>
          <div className='row justify-between m-0 p-10'>
            <h1 className='m-0'>Account price list</h1>
            <ButtonComponent className="home_btn" click={() => Router.push("/admin/crud/account-price-list/create")}>+ Create</ButtonComponent>
          </div>
        </CardComponent>
        <Table rowKey={rowKey} dataSource={dataSource} columns={columns} pagination={false} />
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
            <ButtonComponent color={'--outline-primary'} click={() => handleDelete()}>Yes</ButtonComponent>
            <ButtonComponent click={() => {
              setShow(false)
            }}>No</ButtonComponent>
          </div>
        </ModalComponent>
      </div>
    </div>
   </>
  )
}

export default AccountPriceList