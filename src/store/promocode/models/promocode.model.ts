import { IPriceList } from "../types/promocode-types";

export class PromocodeModel {
    public id: number | string | undefined;
    public promocode:string | undefined;
    public status:boolean | undefined;
    constructor(item: IPriceList) {
        this._setId(item);
        this._setPromocode(item);
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
  * set promocode
  * @param promocode
  * @private
  */

    private _setPromocode({ promocode }: IPriceList) {
        this.promocode = promocode;
    }


        

}