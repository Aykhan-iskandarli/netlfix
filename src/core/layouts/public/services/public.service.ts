import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { container, injectable } from "tsyringe";
import { API } from "../configs/api.config";

@injectable()
export class Auth {
  private _post: POST = container.resolve(POST);
  private _get: GET = container.resolve(GET);
  private _put :PUT=container.resolve(PUT)
  register(data: any): Promise<any> {
    return this._post.setApi(API.register)
        .setPayload(data)
        .requestPromise()
}
login(data: any): Promise<any> {
  return this._post.setApi(API.login)
      .setPayload(data)
      .requestPromise()
}
forgotPassword(data: any): Promise<any> {
  return this._post.setApi(API.forgotpassword)
      .setPayload(data)
      .requestPromise()
}
resetPassword(data: any,token:any): Promise<any> {
  return this._put.setApi(API.resetpassword + "/" +token)
      .setPayload(data)
      .requestPromise()
}
verify(token: any): Promise<any> {
  return this._get.setApi(API.verify + "/" + token)
      .requestPromise()
}
}
