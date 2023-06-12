import { IAccountUserReducerState } from "../types/account-price-list"
import { AccountUserActionTypes } from "./action-types"


const initialState: IAccountUserReducerState = {
    accountUser: [],
    orderHistory: [],
    error: [],
}

export const AccountUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AccountUserActionTypes.GET_ACCOUNT_USER_START:
            return {
                ...state,
            }
        case AccountUserActionTypes.GET_ACCOUNT_USER_SUCCESS:
            return {
                ...state,
                accountUser: action.payload
            }
        case AccountUserActionTypes.GET_ACCOUNT_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case AccountUserActionTypes.GET_ORDER_HISTORY_START:
            return {
                ...state,
            }
        case AccountUserActionTypes.GET_ORDER_HISTORY_SUCCESS:
            return {
                ...state,
                orderHistory: action.payload
            }
        case AccountUserActionTypes.GET_ORDER_HISTORY_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
