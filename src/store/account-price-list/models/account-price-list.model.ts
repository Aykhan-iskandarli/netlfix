import { IAccountPriceList} from "../types/account-price-list";


export class AccountPriceListModel {
    public id: number | string | undefined;
    public roomCount: number | string | undefined;
    public expiredate: string | undefined;
    public roomStatus: boolean | undefined;
    public roomName: string | undefined;
    public roomPassword: string | undefined;
    public account: any | null=null;
    public priceListId: any | null=null;
    constructor(item: IAccountPriceList) {
        this._setId(item);
        this._setExpireDate(item);
        this._setRoomStatus(item);
        this._setRoomUserName(item);
        this._setRoomUserPassword(item);
        this._setAccount(item);
        this._setPriceList(item);
        this._setRoomCount(item)
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ _id }: IAccountPriceList) {
        this.id = _id;
    }
    

    /**
  * set expireDate
  * @param expireDate
  * @private
  */
    private _setExpireDate({ expiredate }: IAccountPriceList) {
        let splited = expiredate?.split('T')[0]
        let reversedDate = splited?.split('-').reverse().join('-')
        this.expiredate = expiredate;
    }

   /**
  * set roomStatus
  * @param roomStatus
  * @private
  */

    private _setRoomStatus({ roomStatus }: IAccountPriceList) {
        this.roomStatus = roomStatus;
    }
   /**
  * set roomCount
  * @param roomCount
  * @private
  */

   private _setRoomCount({ roomCount }: IAccountPriceList) {
    this.roomCount = roomCount;
}
     /**
   * set status
   * @param status
   * @private
   */

   /**
  * set roomUserName
  * @param roomUserName
  * @private
  */

    private _setRoomUserName({ roomName }: IAccountPriceList) {
        this.roomName = roomName;
    }

   /**
  * set account
  * @param account
  * @private
  */

    private _setAccount({ accountId }: IAccountPriceList) {
        this.account = accountId;
    }
    
   /**
  * set priceListId
  * @param priceListId
  * @private
  */

    private _setPriceList({ priceListId }: IAccountPriceList) {
        this.priceListId = priceListId;
    }
      /**
  * set roomPassword
  * @param roomPassword
  * @private
  */

    private _setRoomUserPassword({ roomPassword }: IAccountPriceList) {
        this.roomPassword = roomPassword;
    }
}