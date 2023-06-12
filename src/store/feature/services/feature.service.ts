import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class featuresServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);
    private _put: PUT = container.resolve(PUT)
    private _delete: DELETE = container.resolve(DELETE)

    createFeature(data: any): Promise<any> {
        return this._post.setApi(API.features)
            .setPayload(data)
            .requestPromise()
    }

    getFeatureAll(): Promise<any> {
        return this._get.setApi(API.features)
            .requestPromise()
    }
    getFeature(): Promise<any> {
        return this._get.setApi(API.feature)
            .requestPromise()
    }
    featureGetById(id: number): Promise<any> {
        return this._get.setApi(API.features + "/" + id)
            .requestPromise()
    }

    editFeature(data: any, id: number): Promise<any> {
        return this._put.setApi(API.features + "/" + id)
            .setPayload(data)
            .requestPromise()
    }
    deleteFeature(id: number): Promise<any> {
        return this._delete.setApi(API.features + "/" + id)
            .requestPromise()
    }
}
