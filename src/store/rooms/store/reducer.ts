import { IRoomReducerState } from "../types/room"
import { RoomActionTypes } from "./action-types"

const initialState: IRoomReducerState = {
    room: [],
    roomGetById: [],
    error: [],
}

export const RoomRedcuer = (state = initialState, action: any) => {
    switch (action.type) {
        case RoomActionTypes.GET_ROOMS_START:
            return {
                ...state,
            }
        case RoomActionTypes.GET_ROOMS_SUCCESS:
            return {
                ...state,
                room: action.payload
            }
        case RoomActionTypes.GET_ROOMS_SUCCESS:
            return {
                ...state,
                error: action.payload
            }
        case RoomActionTypes.GET_ROOMS_BY_ID_START:
            return {
                ...state,
            }
        case RoomActionTypes.GET_ROOMS_BY_ID_SUCCESS:
            return {
                ...state,
                roomGetById: action.payload
            }
        case RoomActionTypes.GET_ROOMS_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
