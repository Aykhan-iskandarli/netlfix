export interface IAccount {
    _id: number | string | undefined
    status: boolean | undefined,
    email: string | undefined,
    password: password | undefined,
}


export interface IAccountReducerState {
   account:[],
   accountGetById:[],
   error:[]
}
