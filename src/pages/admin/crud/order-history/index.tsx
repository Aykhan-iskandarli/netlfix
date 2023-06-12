import { Table } from 'antd';
import CardComponent from 'packages/RCard/card.component';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import css from "./order-history.module.scss"
import { getAccountUser, getOrderHistory } from 'store/sell-account/store/action';


const OrderHistoryComponent = () => {
  const orderHistory: any = useSelector((state: any) => state.accountUser.orderHistory);
  const dispatch: any = useDispatch()


  useEffect(() => {
    dispatch(getOrderHistory())
  }, [])
  const dataSource: any = orderHistory
  const rowKey = (record: any) => record.id;
  const columns: any = [
    {
      title: "id",
      dataIndex: "id",
      key: "1",
      responsive: ['md'],
    },
    {
      title: "Start date",
      dataIndex: "createdAt",
      key: "2",
      render:(item:any)=><span>{item?.split("T")[0].split("-").reverse().join(".")}</span>
    },
    {
      title: "Expire date",
      dataIndex: "expireDate",
      key: "2",
      render:(item:any)=><span>{item?.split("T")[0].split("-").reverse().join(".")}</span>
    },
    {
      title: "Price",
      dataIndex: "priceList",
      key: "3",
      render:(item:any)=><span>{item?.price} $</span>
    },
    {
      title: "Time",
      dataIndex: "priceList",
      key: "4",
      render:(item:any)=><span>{item?.time} day</span>
    },
    {
      title: "Email",
      dataIndex: "user",
      key: "5",
      render:(item:any)=><span>{item?.email}</span>
    },
    {
      title: "Name",
      dataIndex: "user",
      key: "6",
      render:(item:any)=><span>{item?.firstName} {item.lastName}</span>
    },
    {
      title: "Status",
      dataIndex: "expireDate",
      key: "2",
      render:(item:any)=>(new Date() > new Date(item) ? <span className={css.order_history_expired}>expired</span>:<span className={css.order_history_inUsage}>in usage</span>)
    },
  ];


  return (
    <div className={css.order_history}>
      <div className="container-fluid">
        <CardComponent className={css.order_history_card}>
          <div className='row justify-between m-0 p-10'>
            <h1 className='m-0'>Order history</h1>
          </div>
        </CardComponent>
        <Table rowKey={rowKey} dataSource={dataSource && dataSource} columns={columns} pagination={false} />
      </div>
    </div>
  )
}

export default OrderHistoryComponent