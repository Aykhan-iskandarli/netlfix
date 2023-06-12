import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  ApiInterceptor,
  ApiInterceptorResponse,
} from "src/core/layouts/public/interceptors/api.interceptor";
import { setUserData } from "src/core/layouts/public/store/actions";
import "reflect-metadata"
import { container } from "tsyringe";
import Cookies from "js-cookie";
import LoadingComponent from "packages/RLoading/loading.component";
  const interceptor: any = container.resolve(ApiInterceptor);
  const interceptorRes: any = container.resolve(ApiInterceptorResponse);
const PrivateComponent = ({ children }: any) => {
  const loading: any = useSelector((state: any) => state.publicState.loading);
  const user: any = useSelector((state: any) => state.publicState.user);

  const token = Cookies.get('token');
  const dispatch: any = useDispatch();
  const {pathname} = useRouter()

  const AccessUrl = {
    admin:[
      "/",
      "/admin/crud/account",
      "/admin/crud/account/create",
      "/admin/crud/account/edit/[edit]",
      "/admin/crud/price-list",
      "/admin/crud/price-list/create",
      "/admin/crud/price-list/edit/[edit]",
      "/admin/crud/account-price-list",
      "/admin/crud/account-price-list/create",
      "/admin/crud/account-price-list/edit/[edit]",
      "/admin/crud/brand",
      "/admin/crud/room/create",
      "/admin/crud/brand/create",
      "/admin/crud/brand",
      "/admin/crud/brand/edit/[edit]",
      "/admin/crud/feature/create",
      "/admin/crud/feature",
      "/admin/crud/feature/edit/[edit]",
      "/user/profile",
      "/about",
      "/admin/crud/promocode",
      "/admin/crud/promocode/create",
      "/admin/crud/promocode/edit/[edit]",
      "/admin/crud/order-history",
    ],

    user:[
      "/",
      "/user/profile",
      "/about"
     ]
  }
  useEffect(()=>{
    token && dispatch(setUserData(token))
  },[dispatch])
  useEffect(() => {
    if (!token) {
      Router.push("/");
    } else {
      switch (user.role) {
        case 1:
          if (!AccessUrl.admin.includes(pathname)) {
            Router.push("/admin/crud");
          } else {
          }
          break;
        case 0:
          if (!AccessUrl.user.includes(pathname)) {
            Router.push("/");
          } else {
          }
          break;
        default:
          break;
      }
    }
  }, [token,user,pathname]);


  return (
    <div>
      {loading && <LoadingComponent  />}
      {children}
    </div>
  );
};

export default PrivateComponent;
