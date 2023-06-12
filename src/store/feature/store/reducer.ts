import { IFeaturesReducerState } from "../types/features"
import { FeaturesActionTypes } from "./action-types"

const initialState: IFeaturesReducerState = {
    feature: [],
    featureLang: [],
    featureGetById: [],
    error: [],
}

export const FeatureRedcuer = (state = initialState, action: any) => {
    switch (action.type) {
        case FeaturesActionTypes.GET_FEATURES_ALL_START:
            return {
                ...state,
            }
        case FeaturesActionTypes.GET_FEATURES_ALL_SUCCESS:
            return {
                ...state,
                feature: action.payload
            }
        case FeaturesActionTypes.GET_FEATURES_ALL_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case FeaturesActionTypes.GET_FEATURES_START:
            return {
                ...state,
            }
        case FeaturesActionTypes.GET_FEATURES_SUCCESS:
            return {
                ...state,
                featureLang: action.payload
            }
        case FeaturesActionTypes.GET_FEATURES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case FeaturesActionTypes.GET_FEATURES_BY_ID_START:
            return {
                ...state,
            }
        case FeaturesActionTypes.GET_FEATURES_BY_ID_SUCCESS:
            return {
                ...state,
                featureGetById: action.payload
            }
        case FeaturesActionTypes.GET_FEATURES_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
