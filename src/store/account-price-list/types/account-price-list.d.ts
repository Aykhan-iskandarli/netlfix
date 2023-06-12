import { IAccount } from "store/accounts/types/account"
import { IPriceList } from "store/price-list/types/price-list"

export interface IAccountPriceList {
    _id: number | string | undefined
    roomCount: number | string | undefined
    expiredate: string | undefined,
    roomCount: number | string | undefined,
    roomStatus: boolean | undefined,
    roomName: string | undefined,
    roomPassword: string | undefined,
    accountId:IAccount,
    priceListId:IPriceList
}


export interface IAccountPriceListReducerState {
   accountPriceList:[],
   accountPriceListGetById:[],
   error:[]
}
