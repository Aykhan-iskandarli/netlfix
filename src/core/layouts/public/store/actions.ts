import "reflect-metadata";
import { Dispatch } from "react";
import { container } from "tsyringe";
import {
  AuthActionTypes,
  IActionCreator,
  publicConstants,
  toggleLoadingActions,
} from "./action-types";
import { langType } from "../../../../assets/db/db.service";
import { Auth } from "../services/public.service";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import cookie from "js-cookie";
import Swal from 'sweetalert2'

const auth: any = container.resolve(Auth);
export const loginSuccess = (user: any) => ({
  type: AuthActionTypes.SIGN_IN,
  payload: user,
});
export const loginFail = (err: any) => ({
  type: AuthActionTypes.SIGN_IN_FAIL,
  payload: err,
});
export const signOut = (err: any) => ({
  type: AuthActionTypes.SIGN_OUT,
});

export const loading = (loading: boolean) => ({
  type: publicConstants.LOADING,
  payload: loading,
});

export const toggleLoading = (val: boolean) => {
  return {
    type: toggleLoadingActions.TOGGLE_LOADING,
    payload: val,
  };
};


export const localizationSucces = (localization: langType) => ({
  type: publicConstants.LOCALIZATION_TOGGLE,
  payload: localization,
});

export const localizationToggle =
  (lang: langType) => (dispatch: Dispatch<IActionCreator>) => {
    dispatch(localizationSucces(lang));
  };

export const setUserData = (token: string) => (dispatch: any) => {
  try {
    const token_decode:any = jwt_decode(token);
    dispatch(loginSuccess(token_decode));
  } catch (error) {
    console.error(error);
  }
};

export const logOut = () => (dispatch: any) => {
  dispatch({
    type: AuthActionTypes.SIGN_OUT,
  });
    removeCookie("token");
    Router.push("/");
};

export const register = (data: any) => (dispatch: any) => {
  auth
    .register(data)
    .then((res: any) => {
      Swal.fire({
        title: `An e-mail was sent to ${data.email}`,
        text: 'Please check email',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
    })
    .catch((err: any) => {
      dispatch(loginFail(err));
   
    });
};

export const login = (data: any) => (dispatch: any) => {
  auth
    .login(data)
    .then((res: any) => {
      dispatch(setUserData(res.data.token));
      authenticate(res.data);
      Router.push("/");
    })
    .catch((err: any) => {
      dispatch(loginFail(err));
    });
};

export const forgotPassword = (data: any) => (dispatch: any) => {
  auth
    .forgotPassword(data)
    .then((res: any) => {
      Swal.fire({
        title: `An e-mail was sent to ${data.email}`,
        text: 'Please check email',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
    })
    .catch((err: any) => {
      dispatch(loginFail(err));
    });
};

export const resetPassword = (data: any,token:any) => (dispatch: any) => {
  auth
    .resetPassword(data,token)
    .then((res: any) => {
      Swal.fire({
        title: `Successfully updated password`,
        icon: 'success',
        confirmButtonText: 'Okay'
      })
    })
     Router.push("/login")
    .catch((err: any) => {
      dispatch(loginFail(err));
    });
};

export const verify = (token: any) => (dispatch: any) => {
  auth
    .verify(token)
    .then((res: any) => {
      // Router.push("/");
      console.log("success")
    })
    .catch((err: any) => {
      dispatch(loginFail(err));
    });
};
// set cookie
export const setCookie = (key: any, value: any) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key: any) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// get cookie
// export const getCookie = (key: any) => {
//   if (process.browser) {
//     if (cookie.get(key)) {
//         console.log(key,"ola")
//       cookie.get(key);
//     }
//   }
// };

// // localstorage
// export const setLocalStorage = (key: any, value: any) => {
//   if (process.browser) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// };

// export const removeLocalStorage = (key: any) => {
//   if (process.browser) {
//     localStorage.removeItem(key);
//   }
// };

// autheticate user by pass data to cookie and localstorage
export const authenticate = (data: any) => {
  setCookie("token", data.token);
};
// export const isAuth = () => {
//   if (process.browser) {
//     const cookieChecked: any = cookie.get("token");
//     if (cookieChecked) {
//       if (localStorage.getItem("user")) {
//         const item =  JSON.parse(localStorage.getItem("user") || 'null');
//         return item
//       } else {
//         return false;
//       }
//     }
//   }
// };
