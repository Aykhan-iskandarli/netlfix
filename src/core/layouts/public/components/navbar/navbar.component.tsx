import Link from "next/link";
import css from "./navbar.module.scss"
import { HiUser } from "react-icons/hi"
import { useEffect, useRef, useState } from "react";
import LogoComponent from "src/core/shared/logo/logo.component";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { localizationToggle, logOut } from "../../store/actions";
import {IoMdLogOut} from "react-icons/io"
import {FiChevronRight} from "react-icons/fi"
import DropdownComponent from "packages/RDropDown/dropdown.component";
import { GetLang } from "../../helpers/common-functions/common-functions";
import { DbService, langType } from "assets/db/db.service";
import  Router  from "next/router";
import { useTranslation } from 'react-i18next';


const NavbarComponent = () => {

  const [openSub, setOpenSub] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const user: any = useSelector((state: any) => state.publicState.user);
  const auth: any = useSelector((state: any) => state.publicState.auth)
  const dropDown: any = useRef(null);
  const [session, setSession] = useState<langType>("az");
  const dispatch:any = useDispatch()
  const token = Cookies.get("token")
  const { t, i18n } = useTranslation();

  const lang = [
    {
    value:"az",
    key:1,
    label:"az"
  },
  {
    value:"en",
    key:2,
    label:"en"
  },
  {
    value:"ru",
    key:3,
    label:"ru"
  },
  ]


useEffect(() => {
  setSession(GetLang() ? GetLang() : "az");
}, [session]);

const clickHandler = (itemVal: langType) => {
  setSession(itemVal);
  i18n.changeLanguage(itemVal && itemVal)
  localStorage.setItem("lang", itemVal);
  dispatch(localizationToggle(itemVal));
};

  const clickOutside = (event: any) => {
    if (dropDown.current && !dropDown.current.contains(event.target)) {
      setOpenSub(false)
    }
}
useEffect(() => {
  const scrollBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollBackground);
});

const handleDropdown = (e:any) =>{
  setOpenSub((prev:any)=>!prev)
}
useEffect(()=>{
  document.addEventListener("mousedown", clickOutside);
  return () => {
    document.removeEventListener("mousedown", clickOutside);
  };
},[])

const goTo = () =>{
  Router.push("/user/profile")
}

  return (
      <div className={css.navbar_section} ref={dropDown}>
      <nav className={`${navbar ? `${css.navbar } ${ css.sticky}`:css.navbar}`}>
      <div className="container">
          <div className="col-12">
            <div className="row justify-between align-center">
              <LogoComponent />
              <ul className={css.navbar_menu}>
                {user &&
                  user?.role === 1 &&  token &&     
                  <Link className={css.navbar_menu_item} href="/admin/crud">
                  <li>Admin</li>
                </Link>
                }
                <Link className={css.navbar_menu_item} href="/">
                  <li>{t('Home')}</li>
                </Link>
                <Link className={css.navbar_menu_item} href="/">
                  <li>{t('about')}</li>
                </Link>
                <Link className={css.navbar_menu_item} href="/">
                  <li>{t('subscriptions')}</li>
                </Link>
                <div className={css.navbar_menu_sub}>
                  <div
                    className={css.navbar_menu_sub_icon}
                    onClick={(e: any) => handleDropdown(e)}
                  >
                    <HiUser />
                  </div>
                  {!auth ? (
                    <ul
                      className={`${
                        openSub
                          ? css.navbar_menu_sub_list
                          : `${css.navbar_menu_sub_none} ${css.navbar_menu_sub_list}`
                      }`}
                    >
                      <Link href="/login">
                        <li>Login</li>
                      </Link>
                      <Link href="/register">
                        <li>Register</li>
                      </Link>
                    </ul>
                  ) : (
                      <ul
                        className={`${
                          openSub
                            ? `${css.navbar_menu_sub_list} ${css.navbar_menu_sub_list_auth} `
                            : `${css.navbar_menu_sub_none} ${css.navbar_menu_sub_list} `
                        }`}
                      >
                        <li className={css.navbar_menu_sub_list_item} onClick={goTo}><div className={css.navbar_menu_sub_list_item_sub}>{user?.email} <span>View personal information</span> </div><p></p>  <FiChevronRight/></li>
                        <li className={css.navbar_menu_sub_list_item} onClick={() => dispatch(logOut())}><IoMdLogOut/><span>Logout</span> </li>
                      </ul>
                  )}
                </div>
                <DropdownComponent text={lang} itemClick={clickHandler} >
                  {session}
                </DropdownComponent>
              </ul>
            </div>
          </div>
      </div>
      </nav>

    </div>
  );
}


export default NavbarComponent 