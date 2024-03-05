import Lottie from 'lottie-react'
import React from 'react'
import bgAnimate from './bgAnimate.json'

export default function LottieLogin() {
  return (
    <div className='bgAnimate absolute'>
        <Lottie animationData={bgAnimate} loop={true}/>
    </div>
  )
}
