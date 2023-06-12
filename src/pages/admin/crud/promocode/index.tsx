import { Image, Space, Table } from "antd";
import ButtonComponent from "packages/RButton/button.component";
import CardComponent from "packages/RCard/card.component";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./promocode.module.scss";
import Router from "next/router";
import ModalComponent from "packages/RModal/modal.component";
import { deletePromocode, getPromocode } from "store/promocode/store/action";
const PromocodeComponent = () => {
  const promocode: any = useSelector((state: any) => state.promocode.promocode);
  const dispatch: any = useDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  useEffect(() => {
    dispatch(getPromocode());
  }, []);
  const dataSource: any = promocode;
  const rowKey = (record: any) => record.id;
  const columns: any = [
    {
      title: "id",
      dataIndex: "id",
      key: "1",
      responsive: ["md"],
    },
    {
      title: "Promocode",
      dataIndex: "promocode",
      key: "2",
      render: (text:any) => <span>{text}</span>
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
    Router.push(`/admin/crud/promocode/edit/${id}`);
  };

  const handleDelete = async () => {
    await dispatch(deletePromocode(id));
    dispatch(getPromocode());
    setShow(false);
  };
  return (
    <div className={css.price_list}>
      <div className="container-fluid">
        <CardComponent className={css.price_list_card}>
          <div className="row justify-between m-0 p-10">
            <h1 className="m-0">Promocodes</h1>
            <ButtonComponent
              className="home_btn"
              click={() => Router.push("/admin/crud/promocode/create")}
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

export default PromocodeComponent;
