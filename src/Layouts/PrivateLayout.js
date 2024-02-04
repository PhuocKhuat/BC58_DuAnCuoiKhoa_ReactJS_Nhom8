import React from 'react'
import { useSelector } from 'react-redux'

export default function PrivateLayout({children}) {
    const { user } = useSelector(state => state.headerSlice)
  return (
    !user ? window.location.href="/" : children
  )
}
