import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { PriceListActionTypes } from "./action-types";
import { priceListServices } from "../services/price-list.service";
import { PriceListModel } from "../models/price-list.model";
import { PriceListUiModel } from "../models/price-list-ui.model";
import { PriceListUiByIdModel } from "../models/price-list-ui-by-id.model";


const service = container.resolve(priceListServices)


const getPriceListStart = ():any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_START
      }
)

const getPriceListSuccess = (data:any):any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_SUCCESS,
        payload:data
      }
)

const getPriceListFail = (data:any):any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_FAIL
      }
)


export const getPriceList = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getPriceListStart())
      return service.getPriceList().then((res) => {
        return res.data.map((item:any)=>(
         new PriceListUiModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getPriceListSuccess(res))
        })
        .catch(err => {
          dispatch(getPriceListFail(err))
        })
    }
  )

  const getPriceListAllStart = ():any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_ALL_START
      }
)

const getPriceListAllSuccess = (data:any):any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_ALL_SUCCESS,
        payload:data
      }
)

const getPriceListAllFail = (data:any):any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_ALL_FAIL
      }
)

export const getPriceListAll = () => (
  (dispatch: Dispatch<IActionCreator>) => {
    dispatch(getPriceListAllStart())
    return service.getPriceListAll().then((res) => {
      return res.data.map((item:any)=>(
       new PriceListModel(item)
      ))
    })
      .then((res: any) => {
        dispatch(getPriceListAllSuccess(res))
      })
      .catch(err => {
        dispatch(getPriceListAllFail(err))
      })
  }
)

  

  const getPriceListByIdStart = ():any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_BY_ID_START
      }
)

const getPriceListByIdSuccess = (data:any):any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_BY_ID_SUCCESS,
        payload:data
      }
)

const getPriceListByIdFail = (data:any):any=>(
    {
        type: PriceListActionTypes.GET_PRICE_LIST_BY_ID_FAIL
      }
)

export const getPriceListById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getPriceListByIdStart())
      return service.priceListGetById(id).then((res) => {
        return new PriceListUiByIdModel(res.data[0])
      })
        .then((res: any) => {
          dispatch(getPriceListByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getPriceListByIdFail(err))
        })
    }
  )

  export const createPriceList = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createPriceList(data).then(res => {
        successToast('Succesfully added');
        Router.push("/admin/crud/price-list/")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editPriceList = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editPriceList(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/price-list")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deletePriceList = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deletePriceList(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )