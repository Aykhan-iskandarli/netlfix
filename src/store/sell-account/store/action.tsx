import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { accountPriceListServices } from "../services/account-price-list.service";
import { AccountUserActionTypes } from "./action-types";
import { AccountPriceListModel } from "../models/account-price-list.model";


const service = container.resolve(accountPriceListServices)


const getAccountUserStart = ():any=>(
    {
        type: AccountUserActionTypes.GET_ACCOUNT_USER_START
      }
)

const getAccountUserSuccess = (data:any):any=>(
    {
        type: AccountUserActionTypes.GET_ACCOUNT_USER_SUCCESS,
        payload:data
      }
)

const getAccountUserFail = (data:any):any=>(
    {
        type: AccountUserActionTypes.GET_ACCOUNT_USER_FAIL
      }
)


export const getAccountUser = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getAccountUserStart())
      return service.getAccountUser().then((res) => {
        return res.data.map((item:any)=>(
         new AccountPriceListModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getAccountUserSuccess(res))
        })
        .catch(err => {
          dispatch(getAccountUserFail(err))
        })
    }
  )

  const getOrderHistoryStart = ():any=>(
    {
        type: AccountUserActionTypes.GET_ORDER_HISTORY_START
      }
)

const getOrderHistorySuccess = (data:any):any=>(
    {
        type: AccountUserActionTypes.GET_ORDER_HISTORY_SUCCESS,
        payload:data
      }
)

const getOrderHistoryFail = (data:any):any=>(
    {
        type: AccountUserActionTypes.GET_ORDER_HISTORY_FAIL
      }
)

export const getOrderHistory = () => (
  (dispatch: Dispatch<IActionCreator>) => {
    dispatch(getOrderHistoryStart())
    return service.getOrderHistory().then((res) => {
      return res.data.map((item:any)=>(
       new AccountPriceListModel(item)
      ))
    })
      .then((res: any) => {
        dispatch(getOrderHistorySuccess(res))
      })
      .catch(err => {
        dispatch(getOrderHistoryFail(err))
      })
  }
)
  

  export const postAccountWithTime = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.postAccountWithTime(data).then(res => {
        successToast('Succesfully');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )
