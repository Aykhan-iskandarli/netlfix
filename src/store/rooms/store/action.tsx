import { IActionCreator } from "src/root store/types/store.types";
import { container } from "tsyringe";
import { Dispatch } from "react";
import { successToast } from "src/core/shared/toast/toast";
import  Router  from "next/router";
import { roomServices } from "../services/rooms.service";
import { RoomActionTypes } from "./action-types";
import { RoomModel } from "../models/rooms.model";

const service = container.resolve(roomServices)


const getRoomStart = ():any=>(
    {
        type: RoomActionTypes.GET_ROOMS_START
      }
)

const getRoomSuccess = (data:any):any=>(
    {
        type: RoomActionTypes.GET_ROOMS_SUCCESS,
        payload:data
      }
)

const getRoomFail = (data:any):any=>(
    {
        type: RoomActionTypes.GET_ROOMS_FAIL
      }
)


export const getRoom = () => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getRoomStart())
      return service.getRoom().then((res) => {
        return res.data.rooms.map((item:any)=>(
         new RoomModel(item)
        ))
      })
        .then((res: any) => {
          dispatch(getRoomSuccess(res))
        })
        .catch(err => {
          dispatch(getRoomFail(err))
        })
    }
  )
  

  const getRoomByIdStart = ():any=>(
    {
        type: RoomActionTypes.GET_ROOMS_BY_ID_START
      }
)

const getRoomByIdSuccess = (data:any):any=>(
    {
        type: RoomActionTypes.GET_ROOMS_BY_ID_SUCCESS,
        payload:data
      }
)

const getRoomByIdFail = (data:any):any=>(
    {
        type: RoomActionTypes.GET_ROOMS_BY_ID_FAIL
      }
)

export const getRoomById = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      dispatch(getRoomByIdStart())
      return service.roomGetById(id).then((res) => {
        return new RoomModel(res.data)
      })
        .then((res: any) => {
          dispatch(getRoomByIdSuccess(res))
        })
        .catch(err => {
          dispatch(getRoomByIdFail(err))
        })
    }
  )

  export const createRoom = (data: any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.createRoom(data).then(res => {
        successToast('Succesfully added');
        // Router.push("/admin/crud/room/")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )


  export const editRoom = (data: any,id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.editRoom(data,id).then(res => {
        successToast('Succesfully update');
        Router.push("/admin/crud/room/")
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )

  export const deleteRoom = (id:any) => (
    (dispatch: Dispatch<IActionCreator>) => {
      return service.deleteRoom(id).then(res => {
        successToast('Succesfully deleted');
        return Promise.resolve(res.data);
      }).catch(err => {
        return Promise.reject(err);
      })
    }
  )