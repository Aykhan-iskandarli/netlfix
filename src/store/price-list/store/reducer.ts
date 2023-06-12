import { IPriceListReducerState } from "../types/price-list";
import { PriceListActionTypes } from "./action-types";

const initialState: IPriceListReducerState = {
  priceList: [],
  priceListAll:[],
  priceListGetById: [],
  error: [],
};

export const priceListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PriceListActionTypes.GET_PRICE_LIST_START:
      return {
        ...state,
      };
    case PriceListActionTypes.GET_PRICE_LIST_SUCCESS:
      return {
        ...state,
        priceList: action.payload,
      };
    case PriceListActionTypes.GET_PRICE_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PriceListActionTypes.GET_PRICE_LIST_ALL_START:
      return {
        ...state,
      };
    case PriceListActionTypes.GET_PRICE_LIST_ALL_SUCCESS:
      return {
        ...state,
        priceListAll: action.payload,
      };
    case PriceListActionTypes.GET_PRICE_LIST_ALL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PriceListActionTypes.GET_PRICE_LIST_BY_ID_START:
      return {
        ...state,
      };
    case PriceListActionTypes.GET_PRICE_LIST_BY_ID_SUCCESS:
      return {
        ...state,
        priceListGetById: action.payload,
      };
    case PriceListActionTypes.GET_PRICE_LIST_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
