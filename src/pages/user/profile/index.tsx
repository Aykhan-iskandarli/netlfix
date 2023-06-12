import React, { useEffect,useState } from 'react'
import css from "./profile.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getAccountUser } from 'store/sell-account/store/action'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import { FaUserAlt } from "react-icons/fa"
import CountdownTimerComponent from 'components/user/profile/countdown/countdown'
import noData from 'src/assets/images/no-data.svg'
import Image from 'next/image'

const ProfileComponent = () => {
  const [dayValue,setDayValue] = useState<any>()
  const [timer,setTimer] = useState<any>()
  const account: any = useSelector((state: any) => state.accountUser.accountUser);
  const dispatch: any = useDispatch()
console.log(account)
  useEffect(() => {
    dispatch(getAccountUser())
  }, [])

  return (
    <div className={css.profile}>
      <div className="container">
        <div className="row">
            { account ?
              account.map((item: any) => (
                <div key={generateGuid()} className="col-4">
                  <div className={css.profile_container}>
                    <div className={css.profile_container_avatar}>
                      <FaUserAlt />
                      <div className={css.profile_container_avatar_text}>
                        <div className={css.profile_container_avatar_text_name}>
                          <h4>{item.user.firstName} {item?.user?.lastName}</h4>
                        </div>
                        <div className={css.profile_container_avatar_text_email}>
                          <span> Email:</span> {item?.user?.email}
                        </div>
                        <div className={css.profile_container_avatar_text_room_status}>
                          <span> Remaining day:</span> <p>{Math.ceil(Math.abs(Number(new Date()) - (Number(new Date(item?.expireDate)))) / (1000 * 60 * 60 * 24))} days</p>
                        </div>
                 
                        {/* countdown timer */}
                      <CountdownTimerComponent countDownTimestampMs={item?.expireDate}/>
                    
                      </div>
                    </div>
                    <div className={css.profile_information}>
                      <div className={css.profile_information_title}>
                        <h4>Account information</h4>
                      </div>
                      <div className={css.profile_information_content}>
                        <p>Account email:</p> <span>{item?.account?.email}</span>
                      </div>
                      <div className={css.profile_information_content}>
                        <p>Account password:</p> <span>{item?.account?.password}</span>
                      </div>
                      <div className={css.profile_information_content}>
                        <p>Room name:</p> <span>{item?.room?.roomName}</span>
                      </div>
                      <div className={css.profile_information_content}>
                        <p>Room password:</p> <span>{item?.room?.roomPassword}</span>
                      </div>
                    </div>
                   <div  className={css.profile_container_date}>
                   <div className={css.profile_container_date_startdate}>
                      <span>Start date:</span> {item?.createdAt?.split("T")[0].split("-").reverse().join(".")}
                    </div>
                    <div className={css.profile_container_date_expiredate}>
                      <span>Expire date:</span>{item?.expireDate?.split("T")[0].split("-").reverse().join(".")}
                    </div>
                   </div>
                   
                  </div>
                </div>
              ))
            : <div className={css.profile_no_data}>
              <h3>not found</h3>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent