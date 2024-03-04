import React from 'react'
import LottieLogin from '../Pages/LoginPage/LottieLogin'
import { Outlet } from 'react-router-dom'

export default function LayoutLottie() {
  return (
    <div className='layoutLottie block lg:flex container relative overflow-hidden'>
        <Outlet/>
        <LottieLogin/>
    </div>
  )
}
