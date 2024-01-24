import React from 'react'
import LottieLogin from '../Pages/LoginPage/LottieLogin'
import { Outlet } from 'react-router-dom'

export default function LayoutLottie() {
  return (
    <div className='flex container'>
        <Outlet/>
        <LottieLogin/>
    </div>
  )
}
