export interface IPriceList {
  _id: number | string | undefined;
  status: boolean | undefined;
  promocode: string | undefined;

}

export interface IPromoCodeReducerState {
  promocode: [];
  userpromocode: [];
  promocodeGetById: [];
  error: [];
}
