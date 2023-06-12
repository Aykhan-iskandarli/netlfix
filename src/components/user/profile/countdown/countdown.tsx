import React,{useEffect,useState} from 'react'
import {getRemainingTimeUntilMsTimestamp} from "./utils/countdownTimerUtils"
import css from "./countdown.module.scss"

const CountdownTimerComponent = ({countDownTimestampMs}:any) => {
  let defaultReaminingTime = {
    seconds:"00",
    minutes:"00",
    hours:"00",
    days:"00",
  }
  const [remainingTime, setRemainingTime] = useState<any>(defaultReaminingTime);

  useEffect(() => {
      const intervalId:any = setInterval(() => {
          updateRemainingTime(countDownTimestampMs);
      }, 1000);
      return () => clearInterval(intervalId);
  },[countDownTimestampMs]);

  function updateRemainingTime(countdown:any) {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className={css.countdown}>
      <span>{remainingTime.days}:</span>
      <span>{remainingTime.hours}:</span>
      <span>{remainingTime.minutes}:</span>
      <span>{remainingTime.seconds}</span>
    </div>
  )
}

export default CountdownTimerComponent