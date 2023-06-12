export interface IRoom {
    _id: number | string | undefined
    count: number | undefined,
}


export interface IRoomReducerState {
   room:[],
   roomGetById:[],
   error:[]
}
