import { IPriceListUiById } from "../types/price-list";


export class PriceListUiByIdModel {
    public id: number | string | undefined;
    public pricelist: string | undefined;
    public brand:string | undefined;
    public photo:string | undefined;
    constructor(item: IPriceListUiById) {
        this._setId(item);
        this._setBrand(item);
        this._setPriceList(item);
        this._setPhoto(item);
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ id }: IPriceListUiById) {
            this.id =id
    }

  /**
  * set brand
  * @param brand
  * @private
  */

  private _setBrand({ brand }: IPriceListUiById) {
    this.brand = brand;
}


  /**
  * set pricelist
  * @param pricelist
  * @private
  */

  private _setPriceList({ pricelist }: IPriceListUiById) {
    this.pricelist = pricelist;
}

  /**
  * set photo
  * @param photo
  * @private
  */

  private _setPhoto({ photo }: IPriceListUiById) {
    this.photo = photo;
}

}