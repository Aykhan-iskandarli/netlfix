export interface IPriceList {
    _id: number | string | undefined
    price: number | string | undefined,
    time: number | string | undefined ,
    features: IFeatures[],
    room: IRoomPriceList[],
    brand:  string | undefined,
    discount:  string | undefined,
    promocode:  string | undefined,
}



export interface IRoomPriceList {
    _id: number | undefined
    count: number | undefined,
}

export interface IPriceListReducerState {
   priceList:[],
   priceListAll:[],
   priceListGetById:[],
   error:[]
}



export interface IPriceListUi {
    pricelist: any,
    features: IFeatures[],
    brand:  string | undefined,
    photo:  string | undefined,
    discount:  number | undefined,
}

export interface IPrice {
    _id: number | undefined | string
}



export interface IFeatures {
    _id: number |  undefined
    description:  string | undefined,
}



export interface IPriceListUiById {
    id:string | undefined,
    brand:  string | undefined,
    photo:  string | undefined,
    pricelist: string | undefined,
}