import { combineReducers } from 'redux';
import { publicReducer } from 'src/core/layouts/public/store/reducer';
import { AccountPriceListReducer } from 'store/account-price-list/store/reducer';
import { AccountRedcuer } from 'store/accounts/store/reducer';
import { BrandRedcuer } from 'store/brands/store/reducer';
import { FeatureRedcuer } from 'store/feature/store/reducer';
import { priceListReducer } from 'store/price-list/store/reducer';
import { promocodeReducer } from 'store/promocode/store/reducer';
import { RoomRedcuer } from 'store/rooms/store/reducer';
import { AccountUserReducer } from 'store/sell-account/store/reducer';


export const rootReducer = combineReducers({
    publicState:publicReducer,
    brand:BrandRedcuer,
    room:RoomRedcuer,
    accounts:AccountRedcuer,
    accountPriceList:AccountPriceListReducer,
    priceList:priceListReducer,
    feature:FeatureRedcuer,
    promocode:promocodeReducer,
    accountUser:AccountUserReducer
})
