import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class promoCodeServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);
    private _put: PUT = container.resolve(PUT)
    private _delete: DELETE = container.resolve(DELETE)

    createPromocode(data: any): Promise<any> {
        return this._post.setApi(API.promocode)
            .setPayload(data)
            .requestPromise()
    }

    getAccountWithPromoCode(data: any): Promise<any> {
        return this._post.setApi(API.paypromocode)
            .setPayload(data)
            .requestPromise()
    }


    getPromocode(): Promise<any> {
        return this._get.setApi(API.promocode)
            .requestPromise()
    }

    PromocodeGetById(id: number): Promise<any> {
        return this._get.setApi(API.promocode + "/" + id)
            .requestPromise()
    }

    editPromocode(data: any, id: number): Promise<any> {
        return this._put.setApi(API.promocode + "/" + id)
            .setPayload(data)
            .requestPromise()
    }
    deletePromocode(id: number): Promise<any> {
        return this._delete.setApi(API.promocode + "/" + id)
            .requestPromise()
    }
}
