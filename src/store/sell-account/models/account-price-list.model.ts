import { IAccountUser } from "../types/account-price-list";


export class AccountPriceListModel {
    public id: number | string | undefined;
    public expireDate: string | undefined;
    public priceList: any | null = null;
    public room: string | undefined;
    public account: any | number | string | undefined;
    public createdAt: string | undefined;
    public user: string | undefined;
    constructor(item: IAccountUser) {
        this._setId(item);
        this._setExpireDate(item);
        this._setPriceList(item);
        this._setAccountPriceListId(item)
        this._setCreatedAt(item)
        this._setUser(item)
        this._setAccount(item)
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ _id }: IAccountUser) {
        this.id = _id;
    }


    /**
  * set expireDate
  * @param expireDate
  * @private
  */
    private _setExpireDate({ expireDate }: IAccountUser) {
        let splited = expireDate?.split('T')[0]
        let reversedDate = splited?.split('-').reverse().join('-')
        this.expireDate = expireDate;
    }


    /**
   * set priceListId
   * @param priceListId
   * @private
   */

    private _setPriceList({ priceListId }: IAccountUser) {
        this.priceList = priceListId;
    }
    /**
* set AccountId
* @param AccountId
* @private
*/

    private _setAccount({ accountId }: IAccountUser) {
        this.account = accountId;
    }
    /**
 * set accountPriceListId
 * @param accountPriceListId
 * @private
 */

    private _setAccountPriceListId({ accountPriceListId }: IAccountUser) {
        this.room = accountPriceListId;
    }

    /**
* set createdAt
* @param createdAt
* @private
*/

    private _setCreatedAt({ createdAt }: IAccountUser) {
        this.createdAt = createdAt;
    }

    /**
* set user
* @param user
* @private
*/

    private _setUser({ user }: IAccountUser) {
        this.user = user;
    }

}