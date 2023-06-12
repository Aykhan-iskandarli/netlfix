import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { featuresServices } from "../services/feature.service";
import { FeaturesActionTypes } from "./action-types";
import { FeatureModel } from "../models/feature.model";


const service = container.resolve(featuresServices)


const getFeatureAllStart = ():any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_ALL_START
      }
)

const getFeatureAllSuccess = (data:any):any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_ALL_SUCCESS,
        payload:data
      }
)

const getFeatureAllFail = (err:any):any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_ALL_FAIL,
        error:err
      }
)


export const getFeatureAll = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getFeatureAllStart())
      return service.getFeatureAll().then((res) => {

        return res.data.features.map((item:any)=>(
         new FeatureModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getFeatureAllSuccess(res))
        })
        .catch(err => {
          dispatch(getFeatureAllFail(err))
        })
    }
  )


  const getFeatureStart = ():any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_START
      }
)

const getFeatureSuccess = (data:any):any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_SUCCESS,
        payload:data
      }
)

const getFeatureFail = (err:any):any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_FAIL,
        error:err
      }
)

  
export const getFeature = () => (
  (dispatch: Dispatch<IActionCreator>) => {
    dispatch(getFeatureStart())
    return service.getFeature().then((res) => {
      return res.data.map((item:any)=>(
       new FeatureModel(item)
      ))
    })
      .then((res: any) => {
        dispatch(getFeatureSuccess(res))
      })
      .catch(err => {
        dispatch(getFeatureFail(err))
      })
  }
)

  

  const getFeatureByIdStart = ():any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_BY_ID_START
      }
)

const getFeatureByIdSuccess = (data:any):any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_BY_ID_SUCCESS,
        payload:data
      }
)

const getFeatureByIdFail = (data:any):any=>(
    {
        type: FeaturesActionTypes.GET_FEATURES_BY_ID_FAIL
      }
)

export const getFeatureById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getFeatureByIdStart())
      return service.featureGetById(id).then((res) => {
        return new FeatureModel(res.data.features)
      })
        .then((res: any) => {
          dispatch(getFeatureByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getFeatureByIdFail(err))
        })
    }
  )

  export const createFeature = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createFeature(data).then(res => {
        successToast('Succesfully added');
        Router.push("/admin/crud/feature")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editFeature = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editFeature(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/feature")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deleteFeature = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deleteFeature(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )