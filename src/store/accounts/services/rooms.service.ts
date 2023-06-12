import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class accountServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);
    private _put: PUT = container.resolve(PUT)
    private _delete: DELETE = container.resolve(DELETE)

    createAccount(data: any): Promise<any> {
        return this._post.setApi(API.account)
            .setPayload(data)
            .requestPromise()
    }

    getAccount(): Promise<any> {
        return this._get.setApi(API.account)
            .requestPromise()
    }

    accountGetById(id: number): Promise<any> {
        return this._get.setApi(API.account + "/" + id)
            .requestPromise()
    }

    editAccount(data: any, id: number): Promise<any> {
        return this._put.setApi(API.account + "/" + id)
            .setPayload(data)
            .requestPromise()
    }
    deleteAccount(id: number): Promise<any> {
        return this._delete.setApi(API.account + "/" + id)
            .requestPromise()
    }
}
