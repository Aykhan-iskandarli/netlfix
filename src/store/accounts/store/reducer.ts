import { IAccountReducerState } from "../types/account"
import { AccountActionTypes } from "./action-types"


const initialState: IAccountReducerState = {
    account: [],
    accountGetById: [],
    error: [],
}

export const AccountRedcuer = (state = initialState, action: any) => {
    switch (action.type) {
        case AccountActionTypes.GET_ACCOUNT_START:
            return {
                ...state,
            }
        case AccountActionTypes.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                account: action.payload
            }
        case AccountActionTypes.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                error: action.payload
            }
        case AccountActionTypes.GET_ACCOUNT_BY_ID_START:
            return {
                ...state,
            }
        case AccountActionTypes.GET_ACCOUNT_BY_ID_SUCCESS:
            return {
                ...state,
                accountGetById: action.payload
            }
        case AccountActionTypes.GET_ACCOUNT_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
