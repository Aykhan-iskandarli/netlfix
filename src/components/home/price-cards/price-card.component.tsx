import ButtonComponent from 'packages/RButton/button.component'
import CardComponent from 'packages/RCard/card.component'
import ModalComponent from 'packages/RModal/modal.component'
import React,{useState,useEffect} from 'react'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import { priceCard } from './index'
import css from "./price-cards.module.scss"
import wave from "src/assets/images/wave.svg"
import { useDispatch, useSelector } from 'react-redux'
import { getPriceList, getPriceListById } from 'store/price-list/store/action'
import { getFeature } from 'store/feature/store/action'
import {MdOutlineDone} from "react-icons/md"
import { Col, Form, Input } from 'antd'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getAccountWithPromocode } from 'store/promocode/store/action'
import Image from 'next/image'
import { postAccountWithTime } from 'store/sell-account/store/action'

const PriceCardComponent = () => {
  const price_list: any = useSelector((state: any) => state.priceList.priceList);
  const priceById: any = useSelector((state: any) => state.priceList.priceListGetById);
  const lang: any = useSelector((state: any) => state.publicState.lang);
  const [show,setShow] = useState<boolean>(false)
  const [show2,setShow2] = useState<boolean>(false)
  const [priceValue,setPriceValue] = useState<any>()
  const [discount,setDiscount] = useState<any>()
  const [id,setId] = useState<any>()
  const dispatch:any = useDispatch()
  const changeModalVisibility = (val: boolean,) => {
    setShow(val)
    setShow2(val)
  }

  useEffect(()=>{
    dispatch(getPriceList())
  },[lang])
  const handleClick = (id:any) =>{
    setShow(true)
    dispatch(getPriceListById(id))
  }

  useEffect(()=>{
    setPriceValue(priceById && priceById?.pricelist && priceById?.pricelist[0]?.value)
    setDiscount(priceById && priceById?.pricelist && priceById?.pricelist[0]?.discount)
    setId(priceById && priceById?.pricelist && priceById?.pricelist[0]?.id)
  },[priceById])


  const onFinish = (values:any) =>{
    console.log(values,"value")
    dispatch(getAccountWithPromocode(values))

  }

  const onFinish2 = (values:any) =>{
    console.log(values,"value")

  }


  const handlePrice = (price:number,discount:number,id:number) =>{
    setPriceValue(price)
    setDiscount(discount)
    setId(id)
  }

  const handlePromoCode = () =>{
    setShow2(true)
  }
  const buyAccount = () =>{
    dispatch(postAccountWithTime({id}))
  }
  return (
    <div className={css.price_secion}>
      <div className="container">
        <div className="row ">
          {price_list && price_list.length >0 ?
            price_list.map((item: any, index: number) => (
              <div className="col-md-4 col-sm-6 " key={generateGuid()}>
                <div  className={css.price_secion_container}>
                  <CardComponent className={` ${css.price_secion_container_cards} ` }>
                    <div className={css.price_secion_container_cards_item}>
                      <div className={css.price_secion_container_cards_item_title}>
                        {/* <p>{item?.brand.name}</p> */}
                        <div className={css.price_secion_container_cards_item_photo}>
                          <img src={item && item?.photo}  alt=''  />
                        </div>
                      </div>
                      <div className={css.price_secion_container_cards_item_bottom}>
                          <div className={css.price_secion_container_cards_item_price}>
                          <p>{item?.pricelist[0].value.toFixed(2)} $ </p> <span>/  month</span>
                        </div>
                      </div>
                    </div>
                  </CardComponent>
                {
                 <div className={ css.price_secion_container_bottom}>
                  {
                       item && item.features?.map((item:any)=>(
                        <div key={generateGuid()} className={css.price_secion_container_bottom_desc}>
                        <p><MdOutlineDone/>{item?.description}</p>
                      </div>
                       ))
                  }
                <ButtonComponent click={()=>handleClick(item.id)}  >Purchase now</ButtonComponent> 
                </div>
                }
                </div>
              </div>
            )) : 
              <Skeleton count={1} height={30} />
          }
        </div>
        <ModalComponent
          size={'md'}
          img={priceById?.photo}
          title={`${priceValue && priceValue?.toFixed(2)}$  (${discount}%)`}
          position='centered'
          setShow={changeModalVisibility}
          show={show}            >
          <div className='modal__body text-center '>
          <div className={css.price_secion_modal_form}>
            {
              priceById && priceById?.pricelist?.map((price:any)=>(
                <span key={generateGuid()} className={`${price.id === id ? css.price_secion_active:"" } ${css.price_secion_modal_form_time}`} onClick={()=>handlePrice(price.value,price.discount,price.id)}>{price.time === 30? 3:price.time === 60?6:price.time === 90?9:""} month</span>
              ))
            }
           </div>
           <div className={css.price_secion_promocode} onClick={handlePromoCode}>
            <span>Promo code</span>
            <p>Enter promo code </p>
           </div>
            <div className='d-flex align-center justify-between'>
              < ButtonComponent
                type='button'
                color='int-main'
                size='md'
                click={() => setShow(false)}
                className={css.price_secion_modal_form_btn}
              >
                Bağla
              </ButtonComponent>

              < ButtonComponent
                type='submit'
                color='success'
                size='md'
                className={css.price_secion_modal_form_btn}
                click={buyAccount}
              >
                Apply
              </ButtonComponent>
            </div>
          </div>
        </ModalComponent >

        {/* promocode */}
        <ModalComponent
          size={'sm'}
          title={``}
          position='centered'
          hideHeader
          setShow={changeModalVisibility}
          show={show2}            >
          <div className='modal__body text-center '>

            <Form layout="vertical" onFinish={onFinish2}>
              <div className={css.price_secion_modal_form}>
               <Form.Item  name="promocode" label="Promocode" rules={[{ required: true, message: 'Please input your promocode' }]}>
                  <Input placeholder="enter promocode" name="promocode" />
                </Form.Item>
              </div>
              <div className='d-flex align-center justify-between'>
              < ButtonComponent
                type='button'
                color='int-main'
                size='md'
                click={() => setShow2(false)}
                className={css.price_secion_modal_form_btn}
              >
                Bağla
              </ButtonComponent>

              < ButtonComponent
                type='submit'
                color='success'
                size='md'
                className={css.price_secion_modal_form_btn}
              >
                Apply
              </ButtonComponent>
            </div>
            </Form>
          
          </div>
        </ModalComponent >
      </div>
    </div>
  )
}

export default PriceCardComponent