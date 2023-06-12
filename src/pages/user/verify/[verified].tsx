import Image from 'next/image'
import React, { useEffect } from 'react'
import css from "./verify.module.scss"
import check from "src/assets/images/check.svg"
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { verify } from 'src/core/layouts/public/store/actions'


const VerifyUser = () => {
  const dispatch:any = useDispatch()
  const {asPath} = useRouter()
  const verifiedToken = asPath.split("/")[3]

  useEffect(()=>{
    if(verifiedToken !== "[verified]"){
      dispatch(verify(verifiedToken))
    }
  },[verifiedToken])
  return (
    <div className={css.verify_user}>
      <div className='container'>
        <div className="row">
          <div className='col-12'>
            <h1>Successfully verified</h1>
            <div className={css.verify_user_image}>
              <Image src={check} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyUser