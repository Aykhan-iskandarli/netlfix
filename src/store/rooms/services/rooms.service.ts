import { DELETE } from "packages/VHttp/DELETE";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { PUT } from "packages/VHttp/PUT";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class roomServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);
    private _put: PUT = container.resolve(PUT)
    private _delete: DELETE = container.resolve(DELETE)

    createRoom(data: any): Promise<any> {
        return this._post.setApi(API.rooms)
            .setPayload(data)
            .requestPromise()
    }

    getRoom(): Promise<any> {
        return this._get.setApi(API.rooms)
            .requestPromise()
    }

    roomGetById(id: number): Promise<any> {
        return this._get.setApi(API.rooms + "/" + id)
            .requestPromise()
    }

    editRoom(data: any, id: number): Promise<any> {
        return this._put.setApi(API.rooms + "/" + id)
            .setPayload(data)
            .requestPromise()
    }
    deleteRoom(id: number): Promise<any> {
        return this._delete.setApi(API.rooms + "/" + id)
            .requestPromise()
    }
}
