import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { API } from "src/core/layouts/public/configs/api.config";
import { container, injectable } from "tsyringe";

@injectable()
export class accountPriceListServices {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);

    postAccountWithTime(data: any): Promise<any> {
        return this._post.setApi(API.payaccount)
            .setPayload(data)
            .requestPromise()
    }
    getAccountUser(): Promise<any> {
        return this._get.setApi(API.payaccount)
            .requestPromise()
    }
    getOrderHistory(): Promise<any> {
        return this._get.setApi(API.orderHistory)
            .requestPromise()
    }
}
