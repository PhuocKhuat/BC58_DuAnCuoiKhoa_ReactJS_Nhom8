import React, { useEffect, useRef } from 'react'
import './styleCountDownEvent.css'
import { useDispatch, useSelector } from 'react-redux';
import { setTimerDays, setTimerHours, setTimerMinutes, setTimerSeconds } from '../../../Redux/countDownEventSlice';

export default function CountDownEvent() {
  let interval = useRef();
  const { timerDays, timerHours, timerMinutes, timerSeconds} = useSelector(state => state.countDownEventSlice);
  // console.log("🚀 ~ CountDownEvent ~ timerDays, timerHours, timerMinutes, timerSeconds:", timerDays, timerHours, timerMinutes, timerSeconds)
  const dispatch = useDispatch();
  const startTimer = ()=>{
    const countDownDate = new Date('March 30, 2024 00:00:00').getTime();
    interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60)/ (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60)/ 1000);
      if(distance < 0){
        clearInterval(interval.current)
      } else{
        dispatch(setTimerDays(days));
        dispatch(setTimerHours(hours));
        dispatch(setTimerMinutes(minutes));
        dispatch(setTimerSeconds(seconds));
      }
    }, 1000);
  }
  useEffect(()=>{
   startTimer();
   return ()=>{
     clearInterval(interval.current);
   }
  },[]);
  return (
    <div>
      <div className="countDownEvent mt-16">
        <div className="timeEvent">
          <div className="uppercase text-white container countDown">
            <div className="grid grid-cols-2 sm:grid-cols-4 w/1-2 lg:w-2/5">
              <div className="pe-12">
                <p className=" numberEvent text-yellow-500">{timerDays}</p>
                <p className="dayEvent">
                  <span>Days</span>
                </p>
              </div>
              <div className="pe-12">
                <p className=" numberEvent text-orange-500">{timerHours}</p>
                <p className="dayEvent">
                  <span>Hours</span>
                </p>
              </div>
              <div className="pe-12">
                <p className=" numberEvent text-pink-500">{timerMinutes}</p>
                <p className="dayEvent">
                  <span>Minutes</span>
                </p>
              </div>
              <div className="pe-12">
                <p className=" numberEvent text-purple-500">{timerSeconds}</p>
                <p className="dayEvent">
                  <span>Seconds</span>
                </p>
              </div>
            </div>
            <div className='titleEvent'>
              <h2 className="eventBiggest">The biggest technology event of 2021</h2>
              <h3 className="text-lg font-bold">March 20-25, 2024, Vietnam</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
