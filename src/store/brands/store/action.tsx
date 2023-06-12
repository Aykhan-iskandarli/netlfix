import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { BrandServices } from "../services/brands.service";
import { BrandActionTypes } from "./action-types";
import { Dispatch } from "react";
import { BrandModel } from "../models/brands.model";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";

const service = container.resolve(BrandServices)


const getBrandStart = ():any=>(
    {
        type: BrandActionTypes.GET_BRAND_START
      }
)

const getBrandSuccess = (data:any):any=>(
    {
        type: BrandActionTypes.GET_BRAND_SUCCESS,
        payload:data
      }
)

const getBrandFail = (data:any):any=>(
    {
        type: BrandActionTypes.GET_BRAND_FAIL
      }
)


export const getBrand = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getBrandStart())
      return service.getBrand().then((res) => {
        return res.data.map((item:any)=>(
         new BrandModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getBrandSuccess(res))
        })
        .catch(err => {
          dispatch(getBrandFail(err))
        })
    }
  )
  

  const getBrandByIdStart = ():any=>(
    {
        type: BrandActionTypes.GET_BRAND_BY_ID_START
      }
)

const getBrandByIdSuccess = (data:any):any=>(
    {
        type: BrandActionTypes.GET_BRAND_BY_ID_SUCCESS,
        payload:data
      }
)

const getBrandByIdFail = (data:any):any=>(
    {
        type: BrandActionTypes.GET_BRAND_BY_ID_FAIL
      }
)

export const getBrandById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getBrandByIdStart())
      return service.brandGetById(id).then((res) => {
        return new BrandModel(res.data)
      })
        .then((res: any) => {
          dispatch(getBrandByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getBrandByIdFail(err))
        })
    }
  )

  export const createBrand = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createBrand(data).then(res => {
        successToast('Succesfully added');
        Router.push("/admin/crud/brand/")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editBrand = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editBrand(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/brand/")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deleteBrand = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deleteBrand(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )