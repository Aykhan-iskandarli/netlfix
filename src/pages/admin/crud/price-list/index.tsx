import { Image, Space, Table } from "antd";
import ButtonComponent from "packages/RButton/button.component";
import CardComponent from "packages/RCard/card.component";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./price-list.module.scss";
import Router from "next/router";
import ModalComponent from "packages/RModal/modal.component";
import { deletePriceList, getPriceList, getPriceListAll } from "store/price-list/store/action";
import { generateGuid } from "src/core/layouts/public/helpers/common-functions/common-functions";
const PriceListComponent = () => {
  const price_list: any = useSelector((state: any) => state.priceList.priceListAll);
  const promocodes: any = useSelector((state: any) => state.promocode.promocode);
  const dispatch: any = useDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  useEffect(() => {
    dispatch(getPriceListAll());
  }, []);
  const dataSource: any = price_list;
  const rowKey = (record: any) => record.id;
  const columns: any = [
    {
      title: "id",
      dataIndex: "id",
      key: "1",
      responsive: ["md"],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "2",
      render: (price:any) => <span>{price.toFixed(2)} $</span>
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "3",
      render: (time:any) => <span>{time}</span>
    },
    {
      title: "Brand Name",
      dataIndex: "brand",
      key: "4",
      render: (text:any) => <span>{text?.name}</span>
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "8",
      render: (text:any) => <span>{text} %</span>
    },
    {
      title: "Room Count",
      dataIndex: "room",
      key: "5",
      render: (text:any) => <span>{text?.count}</span>
    },
    {
      title: "Feature",
      dataIndex: "features",
      key: "6",
      render: (features: any) => (
        <>
          {features && features?.map((feature: any,index:number) => (
            <div key={index}>
              {feature.description}
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Promocode",
      dataIndex: "promocode",
      key: "5",
      render: (text:any) => <span>{text?.promocode}</span>
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
          <a onClick={() => handleModal(record.id)}>delete</a>
        </Space>
      ),
    },
  ];
  const changeAddModalVisibility = (val: any) => {
    setShow(val);
  };
  const handleModal = (id: any) => {
    setShow(true);
    setId(id);
  };

  const handleEdit = (id: any) => {
    Router.push(`/admin/crud/price-list/edit/${id}`);
  };

  const handleDelete = async () => {
    await dispatch(deletePriceList(id));
    dispatch(getPriceListAll());
    setShow(false);
  };
  return (
    <div className={css.price_list}>
      <div className="container-fluid">
        <CardComponent className={css.price_list_card}>
          <div className="row justify-between m-0 p-10">
            <h1 className="m-0">Price list</h1>
            <ButtonComponent
              className="home_btn"
              click={() => Router.push("/admin/crud/price-list/create")}
            >
              + Create
            </ButtonComponent>
          </div>
        </CardComponent>
        <Table
          rowKey={rowKey}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <ModalComponent
          size={"1"}
          show={show}
          position="modal_wrapper"
          setShow={changeAddModalVisibility}
          title={""}
          hideHeader={true}
        >
          <div className="modal_content">
            <h1>are you sure ?</h1>
          </div>
          <div className="modal_btns">
            <ButtonComponent
              color={"--outline-primary"}
              click={() => handleDelete()}
            >
              Yes
            </ButtonComponent>
            <ButtonComponent
              click={() => {
                setShow(false);
              }}
            >
              No
            </ButtonComponent>
          </div>
        </ModalComponent>
      </div>
    </div>
  );
};

export default PriceListComponent;
