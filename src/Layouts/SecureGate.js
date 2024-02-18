import React from 'react'
import { useSelector } from 'react-redux'

export default function SecureGate({children}) {
    const { user } = useSelector(state => state.headerSlice)
    // console.log("🚀 ~ SecureGate ~ user:", user)
  return (
    (!user || user?.maLoaiNguoiDung === "HV") ? window.location.href ="/" : children
  )
}
