import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class accountPriceListServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);
    private _put: PUT = container.resolve(PUT)
    private _delete: DELETE = container.resolve(DELETE)

    createAccountPriceList(data: any): Promise<any> {
        return this._post.setApi(API.accountPriceList)
            .setPayload(data)
            .requestPromise()
    }

    getAccountPriceList(): Promise<any> {
        return this._get.setApi(API.accountPriceList)
            .requestPromise()
    }

    accountPriceListGetById(id: number): Promise<any> {
        return this._get.setApi(API.accountPriceList + "/" + id)
            .requestPromise()
    }

    editAccountPriceList(data: any, id: number): Promise<any> {
        return this._put.setApi(API.accountPriceList + "/" + id)
            .setPayload(data)
            .requestPromise()
    }
    deleteAccountPriceList(id: number): Promise<any> {
        return this._delete.setApi(API.accountPriceList + "/" + id)
            .requestPromise()
    }
}
