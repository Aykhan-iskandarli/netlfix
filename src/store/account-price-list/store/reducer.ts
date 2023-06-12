import { IAccountPriceListReducerState } from "../types/account-price-list"
import { AccountPriceListActionTypes } from "./action-types"


const initialState: IAccountPriceListReducerState = {
    accountPriceList: [],
    accountPriceListGetById: [],
    error: [],
}

export const AccountPriceListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_START:
            return {
                ...state,
            }
        case AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_SUCCESS:
            return {
                ...state,
                accountPriceList: action.payload
            }
        case AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_BY_ID_START:
            return {
                ...state,
            }
        case AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_BY_ID_SUCCESS:
            return {
                ...state,
                accountPriceListGetById: action.payload
            }
        case AccountPriceListActionTypes.GET_ACCOUNT_PRICE_LIST_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
