import React from 'react'
import './style.css'
import FormLogin from './FormLogin'
import LottieLogin from './LottieLogin'

export default function LoginPage() {
  return (
    <div className='loginPage container'>
        <FormLogin/>
        <LottieLogin/>
    </div>
  )
}
