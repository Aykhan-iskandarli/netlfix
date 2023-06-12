import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { accountPriceListServices } from "../services/account-price-list.service";
import { AccountPriceListActionTypes } from "./action-types";
import { AccountPriceListModel } from "../models/account-price-list.model";


const service = container.resolve(accountPriceListServices)


const getAccountPriceListStart = ():any=>(
    {
        type: AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_START
      }
)

const getAccountPriceListSuccess = (data:any):any=>(
    {
        type: AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_SUCCESS,
        payload:data
      }
)

const getAccountPriceListFail = (data:any):any=>(
    {
        type: AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_FAIL
      }
)


export const getAccountPriceList = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getAccountPriceListStart())
      return service.getAccountPriceList().then((res) => {
        return res.data.data.map((item:any)=>(
         new AccountPriceListModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getAccountPriceListSuccess(res))
        })
        .catch(err => {
          dispatch(getAccountPriceListFail(err))
        })
    }
  )
  

  const getAccountPriceListByIdStart = ():any=>(
    {
        type: AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_BY_ID_START
      }
)

const getAccountPriceListByIdSuccess = (data:any):any=>(
    {
        type: AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_BY_ID_SUCCESS,
        payload:data
      }
)

const getAccountPriceListByIdFail = (data:any):any=>(
    {
        type: AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_BY_ID_FAIL
      }
)

export const getAccountPriceListById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getAccountPriceListByIdStart())
      return service.accountPriceListGetById(id).then((res) => {
        return new AccountPriceListModel(res.data.data)
      })
        .then((res: any) => {
          dispatch(getAccountPriceListByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getAccountPriceListByIdFail(err))
        })
    }
  )

  export const createAccountPriceList = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createAccountPriceList(data).then(res => {
        successToast('Succesfully added');
        Router.push("/admin/crud/account-price-list/")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editAccountPriceList = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editAccountPriceList(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/account-price-list")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deleteAccountPriceList = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deleteAccountPriceList(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )