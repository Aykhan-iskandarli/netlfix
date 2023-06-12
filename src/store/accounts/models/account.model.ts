import { IAccount } from "../types/account";

export class AccountModel {
  public id: number | string | undefined;
  public status: boolean | string | undefined;
  public email: string | undefined;
  public password: string | undefined;


  constructor(item: IAccount) {
    this._setId(item);
    this._setStatus(item);
    this._setEmail(item);
    this._setPassword(item);
   
  }

  /**
   * set id
   * @param id
   * @private
   */

  private _setId({ _id }: IAccount) {
    this.id = _id;
  }

  /**
   * set status
   * @param status
   * @private
   */

  private _setStatus({ status }: IAccount) {
    if(status === true){
      this.status = "Active"
    }
    else{
      this.status = "Deactive"
    }
    
  }

  /**
   * set email
   * @param email
   * @private
   */

  private _setEmail({ email }: IAccount) {
    this.email = email;
  }

  
  /**
   * set password
   * @param password
   * @private
   */

  private _setPassword({ password }: IAccount) {
    this.password = password;
  }

   /**
   * set price
   * @param price
   * @private
   */

  //  private _setPrice({ price }: IAccount) {
  //   this.price = price;
  // }

  //    /**
  //  * set time
  //  * @param time
  //  * @private
  //  */

  //  private _setTime({ time }: IAccount) {
  //   this.time = time;
  // }

  //      /**
  //  * set expireDate
  //  * @param expireDate
  //  * @private
  //  */

  //  private _setExpireDate({ expireDate }: IAccount) {
  //   this.expireDate = expireDate;
  // }

  //        /**
  //  * set roomStatus
  //  * @param roomStatus
  //  * @private
  //  */

  //  private _setRoomStatus({ roomStatus }: IAccount) {
  //   this.roomStatus = roomStatus;
  // }

  //        /**
  //  * set roomUserName
  //  * @param roomUserName
  //  * @private
  //  */

  //  private _setRoomUserName({ roomUserName }: IAccount) {
  //   this.roomUserName = roomUserName;
  // }

  //          /**
  //  * set roomPassword
  //  * @param roomPassword
  //  * @private
  //  */

  //  private _setRoomPassword({ roomPassword }: IAccount) {
  //   this.roomPassword = roomPassword;
  // }
  
}
