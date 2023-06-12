import React, { useCallback } from 'react'
import css from "./banner.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router';
import {RiArrowGoBackFill} from "react-icons/ri"

const BannerComponent = ({ prev }: any) => {
    const router = useRouter();
    const goBack = useCallback(() => {
        router.back()
    },[router,])

    return (
        <div className={css.banner}>
                <div className={css.banner_container}>
                    <div className={css.banner_container_prev}>
                        <p onClick={() => goBack()}><RiArrowGoBackFill/><span>{prev}</span></p>
                    </div> /
                    <Link href="/">
                        Home
                    </Link>
                </div>
        </div>
    )
}

export default BannerComponent