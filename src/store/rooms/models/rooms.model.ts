import { IRoom } from "../types/room";


export class RoomModel {
    public id: number | string | undefined;
    public count: number | undefined;

    constructor(item: IRoom) {
        this._setId(item);
        this._setCount(item);
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ _id }: IRoom) {
        this.id = _id;
    }

    /**
  * set count
  * @param count
  * @private
  */

    private _setCount({ count }: IRoom) {
        this.count = count;
    }



}