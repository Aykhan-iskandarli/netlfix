import { IPriceListUi } from "../types/price-list";


export class PriceListUiModel {
    public id: number | string | undefined;
    public pricelist: any | undefined;
    public brand:string | undefined;
    public photo:string | undefined;
    public discount:number | undefined;
    public features:any | string | number | undefined;

    constructor(item: IPriceListUi) {
        this._setId(item);
        this._setBrand(item);
        this._setFeature(item);
        this._setPriceList(item);
        this._setPhoto(item);
        this._setDiscount(item);
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ pricelist }: IPriceListUi) {
        pricelist.map((item:any)=>(
            this.id = item.id
        ))
    }

  /**
  * set feature
  * @param features
  * @private
  */

  private _setFeature({ features }: IPriceListUi) {
  this.features = features;
}


  /**
  * set brand
  * @param brand
  * @private
  */

  private _setBrand({ brand }: IPriceListUi) {
    this.brand = brand;
}


  /**
  * set discount
  * @param discount
  * @private
  */

  private _setDiscount({ discount }: IPriceListUi) {
    this.discount = discount;
}
  /**
  * set pricelist
  * @param pricelist
  * @private
  */

  private _setPriceList({ pricelist }: any) {
    this.pricelist = pricelist;
}


  /**
  * set photo
  * @param photo
  * @private
  */

  private _setPhoto({ photo }: any) {
    this.photo = photo;
}

}