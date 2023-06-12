import { IPriceList } from "../types/price-list";


export class PriceListModel {
    public id: number | string | undefined;
    public price: number | string | undefined;
    public time: number | string | undefined;
    public brand:string | undefined;
    public promocode:string | undefined;
    public discount:string | undefined;
    public room:any | number | undefined ;
    public features:any | string | number | undefined;

    constructor(item: IPriceList) {
        this._setId(item);
        this._setPrice(item);
        this._setTime(item);
        this._setBrand(item);
        this._setRoom(item);
        this._setFeature(item);
        this._setPromocode(item);
        this._setDiscount(item);
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ _id }: IPriceList) {

        this.id = _id;
    }

    /**
  * set price
  * @param price
  * @private
  */

    private _setPrice({ price }: IPriceList) {

        this.price = price;
    }

  /**
  * set time
  * @param time
  * @private
  */

  private _setTime({ time }: IPriceList) {
    this.time= time
}

  /**
  * set feature
  * @param features
  * @private
  */

  private _setFeature({ features }: IPriceList) {
  this.features = features;
}


  /**
  * set discount
  * @param discounts
  * @private
  */

  private _setDiscount({ discount }: IPriceList) {
    this.discount = discount;
  
  /**
  * set room
  * @param room
  * @private
  */

  }

  private _setRoom({ room }: IPriceList) {

    this.room = room;
}


  /**
  * set brand
  * @param brand
  * @private
  */

  private _setBrand({ brand }: IPriceList) {
    this.brand = brand;
}


  /**
  * set promocode
  * @param promocode
  * @private
  */

  private _setPromocode({ promocode }: IPriceList) {
    this.promocode = promocode;
}


}