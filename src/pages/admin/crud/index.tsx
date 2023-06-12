import Link from 'next/link'
import CardComponent from 'packages/RCard/card.component'
import React from 'react'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import css from "./admin-home.module.scss"
import adminMenu from 'components/datas'

const AdminHomeComponent = () => {
  return (
    <div className={`${css.admin_home} `}>
      <div className="container">
      <div  className={css.admin_home_title}>
      <h1>Admin Home</h1>
      </div>
        <div className="row">
          {adminMenu && adminMenu.map((menu: any) => (
            <Link href={menu.url} className={`col-3` } key={generateGuid()}>
              <div className={css.admin_home_container}>
              <CardComponent className={css.admin_home_container_card}>
                <div className={css.admin_home_container_card_title}>
                    <span>{menu.name}</span>
                </div>
              </CardComponent>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHomeComponent