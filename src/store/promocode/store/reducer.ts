import { IPromoCodeReducerState } from "../types/promocode-types"
import { PromocodeActionTypes } from "./action-types"



const initialState: IPromoCodeReducerState = {
    promocode: [],
    userpromocode:[],
    promocodeGetById: [],
    error: [],
}

export const promocodeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case PromocodeActionTypes.GET_PROMOCODE_START:
            return {
                ...state,
            }
        case PromocodeActionTypes.GET_PROMOCODE_SUCCESS:
            return {
                ...state,
                promocode: action.payload
            }
        case PromocodeActionTypes.GET_PROMOCODE_SUCCESS:
            return {
                ...state,
                error: action.payload
            }
        case PromocodeActionTypes.GET_PROMOCODE_BY_ID_START:
            return {
                ...state,
            }
        case PromocodeActionTypes.GET_PROMOCODE_BY_ID_SUCCESS:
            return {
                ...state,
                promocodeGetById: action.payload
            }
        case PromocodeActionTypes.GET_PROMOCODE_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            }
             case PromocodeActionTypes.GET_PAY_PROMOCODE_START:
            return {
                ...state,
                userpromocode: action.payload
            } 
        default:
            return state;
    }
}
