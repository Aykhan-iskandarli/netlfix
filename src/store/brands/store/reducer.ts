import { IBrandReducerState } from "../types/brand"
import { BrandActionTypes } from "./action-types"



const initialState: IBrandReducerState = {
    brand: [],
    brandGetById: [],
    error: [],
}

export const BrandRedcuer = (state = initialState, action: any) => {
    switch (action.type) {
        case BrandActionTypes.GET_BRAND_START:
            return {
                ...state,
            }
        case BrandActionTypes.GET_BRAND_SUCCESS:
            return {
                ...state,
                brand: action.payload
            }
        case BrandActionTypes.GET_BRAND_SUCCESS:
            return {
                ...state,
                error: action.payload
            }
        case BrandActionTypes.GET_BRAND_BY_ID_START:
            return {
                ...state,
            }
        case BrandActionTypes.GET_BRAND_BY_ID_SUCCESS:
            return {
                ...state,
                brandGetById: action.payload
            }
        case BrandActionTypes.GET_BRAND_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
