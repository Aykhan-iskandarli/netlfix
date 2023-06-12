import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class BrandServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);
    private _put: PUT = container.resolve(PUT)
    private _delete: DELETE = container.resolve(DELETE)

    createBrand(data: any): Promise<any> {
        return this._post.setApi(API.brands)
            .setPayload(data)
            .requestPromise()
    }

    getBrand(): Promise<any> {
        return this._get.setApi(API.brands)
            .requestPromise()
    }

    brandGetById(id: number): Promise<any> {
        return this._get.setApi(API.brands + "/" + id)
            .requestPromise()
    }

    editBrand(data: any, id: number): Promise<any> {
        return this._put.setApi(API.brands + "/" + id)
            .setPayload(data)
            .requestPromise()
    }
    deleteBrand(id: number): Promise<any> {
        return this._delete.setApi(API.brands + "/" + id)
            .requestPromise()
    }
}
