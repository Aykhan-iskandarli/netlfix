import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { accountServices } from "../services/rooms.service";
import { AccountActionTypes } from "./action-types";
import { AccountModel } from "../models/account.model";

const service = container.resolve(accountServices)


const getAccountStart = ():any=>(
    {
        type: AccountActionTypes.GET_ACCOUNT_START
      }
)

const getAccountSuccess = (data:any):any=>(
    {
        type: AccountActionTypes.GET_ACCOUNT_SUCCESS,
        payload:data
      }
)

const getAccountFail = (data:any):any=>(
    {
        type: AccountActionTypes.GET_ACCOUNT_FAIL
      }
)


export const getAccount = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getAccountStart())
      return service.getAccount().then((res) => {
        return res.data.accounts.map((item:any)=>(
         new AccountModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getAccountSuccess(res))
        })
        .catch(err => {
          dispatch(getAccountFail(err))
        })
    }
  )
  

  const getAccountByIdStart = ():any=>(
    {
        type: AccountActionTypes.GET_ACCOUNT_BY_ID_START
      }
)

const getAccountByIdSuccess = (data:any):any=>(
    {
        type: AccountActionTypes.GET_ACCOUNT_BY_ID_SUCCESS,
        payload:data
      }
)

const getAccountByIdFail = (data:any):any=>(
    {
        type: AccountActionTypes.GET_ACCOUNT_BY_ID_FAIL
      }
)

export const getAccountById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getAccountByIdStart())
      return service.accountGetById(id).then((res) => {
        return new AccountModel(res.data.account)
      })
        .then((res: any) => {
          dispatch(getAccountByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getAccountByIdFail(err))
        })
    }
  )

  export const createAccount = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createAccount(data).then(res => {
        successToast('Succesfully added');
        Router.push("/admin/crud/account")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editAccount = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editAccount(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/account")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deleteAccount = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deleteAccount(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )