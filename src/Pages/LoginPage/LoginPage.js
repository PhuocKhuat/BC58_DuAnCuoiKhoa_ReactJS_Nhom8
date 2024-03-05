import React from 'react'
import './style.css'
import FormLogin from './FormLogin'
import LottieLogin from './LottieLogin'

export default function LoginPage() {
  return (
    <div className='loginPage block lg:flex container relative overflow-hidden'>
        <FormLogin/>
        <LottieLogin/>
    </div>
  )
}
