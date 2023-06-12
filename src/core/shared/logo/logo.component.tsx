import Link from 'next/link'
import React from 'react'
import css from "./logo.module.scss"

const LogoComponent = ({className}:any) => {
  return (
    <div className={css.logo}>
    <Link className={className} href="/"> NETFLIX SHOP </Link>
  </div>
  )
}

export default LogoComponent