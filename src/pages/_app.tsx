import type { AppProps } from "next/app";
import LayoutComponent from "src/core/layouts/public/layout.component";
import "src/packages/RDropDown/dropdown.component.scss"
import "src/assets/styles/global.scss";
import "reflect-metadata"
import "src/packages/RButton/button.component.scss";
import { Provider } from "react-redux";
import "src/core/shared/toast/toast.scss";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";
import "src/packages/RLoading/loading.component.scss"
import "src/packages/RModal/modal.component.scss"
import { ToastContainer } from "react-toastify";
import store from "src/root store";
import { ConfigProvider, theme as antTheme } from "antd";
import PrivateComponent from "components/private/private.component";
import PublishContentComponent from "components/publish-content/publish-content.component";
import { useEffect } from "react";
import Cookies from "js-cookie";
import  Router  from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import 'react-loading-skeleton/dist/skeleton.css'
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/assets/lang/i18n';
export default function App({ Component, pageProps }: AppProps) {

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  const token = Cookies.get("token");
  useEffect(()=>{
    if(!token){
      // Router.push("/login")
    }
  },[token])
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>

    <Provider store={store}>

      {
        token ?    <PrivateComponent>
        <ConfigProvider>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </ConfigProvider>
      </PrivateComponent> :
      <PublishContentComponent>
         <ConfigProvider>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </ConfigProvider>
      </PublishContentComponent>
      }
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </Provider>
 </I18nextProvider>

  );
}
