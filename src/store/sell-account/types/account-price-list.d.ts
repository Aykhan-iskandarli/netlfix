import { IAccount } from "store/accounts/types/account"
import { IPriceList } from "store/price-list/types/price-list"

export interface IAccountUser {
    _id: number | string | undefined
    roomCount: number | string | undefined
    expireDate: string | undefined,
    accountPriceListId: string | undefined,
    accountId:IAccount,
    priceListId:string | undefined,
    createdAt:string | undefined,
    user:string | undefined,
}


export interface IAccountUserReducerState {
   accountUser:[],
   orderHistory:[],
   error:[]
}
