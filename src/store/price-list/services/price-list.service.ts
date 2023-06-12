import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class priceListServices {
  private _post: POST = container.resolve(POST);
  private _get: GET = container.resolve(GET);
  private _put: PUT = container.resolve(PUT);
  private _delete: DELETE = container.resolve(DELETE);

  createPriceList(data: any): Promise<any> {
    return this._post.setApi(API.priceList).setPayload(data).requestPromise();
  }

  getPriceList(): Promise<any> {
    return this._get.setApi(API.priceList).requestPromise();
  }

  getPriceListAll(): Promise<any> {
    return this._get.setApi(API.priceListAll).requestPromise();
  }

  priceListGetById(id: number): Promise<any> {
    return this._get.setApi(API.priceList + "/" + id).requestPromise();
  }

  editPriceList(data: any, id: number): Promise<any> {
    return this._put
      .setApi(API.priceList + "/" + id)
      .setPayload(data)
      .requestPromise();
  }
  deletePriceList(id: number): Promise<any> {
    return this._delete.setApi(API.priceList + "/" + id).requestPromise();
  }
}
