import Cookies from 'js-cookie';
import  Router  from 'next/router';
import { useDispatch } from 'react-redux';
import store from 'src/root store';
import { injectable } from 'tsyringe';
import { RequestInterceptor } from '../../../../packages/VHttp/interceptors/request.interceptor';
import { ResponseInterceptor } from '../../../../packages/VHttp/interceptors/response.interceptor';
import { GetLang } from '../helpers/common-functions/common-functions';
import { removeCookie, toggleLoading } from '../store/actions';
import Swal from 'sweetalert2'

@injectable()
export class ApiInterceptor extends RequestInterceptor {
    constructor() {
        super();
        this.request();
    }
    request() {
        this.intercept().use((req:any) => {
            const token = Cookies.get("token");
            req.headers = {
                ...req.headers,
                 Authorization: 'Bearer ' + token,
                "Accept-Language": GetLang()
            };
 
            store.dispatch(toggleLoading(true));
            return req;
        })
    }
}
export class ApiInterceptorResponse extends ResponseInterceptor {
    constructor() {
        super();
        this.response();
    }

    response() {
        this.interceptor().use((res:any) => {
            store.dispatch(toggleLoading(false));
            return res;
        }, (error:any) => {
            store.dispatch(toggleLoading(false));
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        Swal.fire({
                            customClass: {
                              icon: 'no-border',
                            },
                            text: "İstifadəçi adı və ya şifrə yanlışdır",
                            showCancelButton: false,
                            confirmButtonText: 'OK',
                          });
                        Router.push('/login')
                        removeCookie("token");
                        break;
                    case 404:
                        break;
                    case 500:
                        break;
                    case 400:
                        break;
                    default:
                        break;
                }
            }
            return Promise.reject(error);
        });
    }
}