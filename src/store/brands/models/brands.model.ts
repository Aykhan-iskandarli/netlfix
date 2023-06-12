import { IBrand } from "../types/brand";


export class BrandModel {
    public id: number | string | undefined;
    public name: string | undefined;
    public photo: string | undefined;

    constructor(item: IBrand) {
        this._setId(item);
        this._setName(item);
        this._setPhoto(item)
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ _id }: IBrand) {
        this.id = _id;
    }

    /**
  * set name
  * @param name
  * @private
  */

    private _setName({ name }: IBrand) {
        this.name = name;
    }

    /**
* set photo
* @param photo
* @private
*/

    private _setPhoto({ photo }: IBrand) {
        this.photo = photo;
    }


}