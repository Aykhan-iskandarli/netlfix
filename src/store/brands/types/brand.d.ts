export interface IBrand {
    _id: number | string | undefined
    name: string | undefined,
    photo: string | undefined
}


export interface IBrandReducerState {
   brand:[],
   brandGetById:[],
   error:[]
}
