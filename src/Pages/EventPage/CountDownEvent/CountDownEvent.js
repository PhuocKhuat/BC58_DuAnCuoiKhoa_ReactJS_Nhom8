import React from 'react'
import './styleCountDownEvent.css'

export default function CountDownEvent() {
  return (
    <div>
      <div className="countDownEvent">
        <div className="timeEvent">
          <div className="uppercase text-white container countDown">
            <div className="flex">
              <div className="pe-12">
                <p className=" numberEvent text-yellow-500">30</p>
                <p className="dayEvent">
                  <span>Days</span>
                </p>
              </div>
              <div className="pe-12">
                <p className=" numberEvent text-orange-500">60</p>
                <p className="dayEvent">
                  <span>Hours</span>
                </p>
              </div>
              <div className="pe-12">
                <p className=" numberEvent text-pink-500">60</p>
                <p className="dayEvent">
                  <span>Minutes</span>
                </p>
              </div>
              <div className="pe-12">
                <p className=" numberEvent text-purple-500">60</p>
                <p className="dayEvent">
                  <span>Second</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="eventBiggest">The biggest technology event of 2021</h2>
              <h3 className="text-lg font-bold">March 20-25, 2024, Vietnam</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
