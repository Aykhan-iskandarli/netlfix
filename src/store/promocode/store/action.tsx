import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { promoCodeServices } from "../services/price-list.service";
import { PromocodeActionTypes } from "./action-types";
import { PromocodeModel } from "../models/promocode.model";


const service = container.resolve(promoCodeServices)


const getPromocodeStart = ():any=>(
    {
        type: PromocodeActionTypes.GET_PROMOCODE_START
      }
)

const getPromocodeSuccess = (data:any):any=>(
    {
        type: PromocodeActionTypes.GET_PROMOCODE_SUCCESS,
        payload:data
      }
)

const getPromocodeFail = (data:any):any=>(
    {
        type: PromocodeActionTypes.GET_PROMOCODE_FAIL
      }
)


export const getPromocode = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getPromocodeStart())
      return service.getPromocode().then((res) => {

        return res.data.data.map((item:any)=>(
         new PromocodeModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getPromocodeSuccess(res))
        })
        .catch(err => {
          dispatch(getPromocodeFail(err))
        })
    }
  )
  

  const getPromocodeByIdStart = ():any=>(
    {
        type: PromocodeActionTypes.GET_PROMOCODE_BY_ID_START
      }
)

const getPromocodeByIdSuccess = (data:any):any=>(
    {
        type: PromocodeActionTypes.GET_PROMOCODE_BY_ID_SUCCESS,
        payload:data
      }
)

const getPromocodeByIdFail = (data:any):any=>(
    {
        type: PromocodeActionTypes.GET_PROMOCODE_BY_ID_FAIL
      }
)

export const getPromocodeById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getPromocodeByIdStart())
      return service.PromocodeGetById(id).then((res) => {
        return new PromocodeModel(res.data.data)
      })
        .then((res: any) => {
          dispatch(getPromocodeByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getPromocodeByIdFail(err))
        })
    }
  )

  export const createPromocode = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createPromocode(data).then(res => {
        successToast('Succesfully added');
        Router.push("/admin/crud/promocode")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  const getPayPromocodeSuccess = (data:any):any=>(
    {
        type: PromocodeActionTypes.GET_PAY_PROMOCODE_START,
        payload:data
      }
)

  export const getAccountWithPromocode = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.getAccountWithPromoCode(data).then(res => {
        dispatch(getPayPromocodeSuccess(res.data.data))
        successToast('Succesfully');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editPromocode = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editPromocode(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/promocode")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deletePromocode = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deletePromocode(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )